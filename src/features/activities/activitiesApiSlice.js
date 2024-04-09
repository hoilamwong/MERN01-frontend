import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const activitiesAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.timerDuration > b.timerDuration)
})

const initialState = activitiesAdapter.getInitialState()

export const activitiesApiSlice = apiSlice.injectEndpoints({
  entdpoints: builder => ({
    getActivities: builder.query({
      query: () => '/activities',
      validateStatus: (response, result) => {
        return response.status === 200 & !result.isError
      },
      transformResponse: responseData => {
        const loadedActivities = responseData.map(activity => {
          activity.id = activity._id
          return activity
        })
        return notesAdapter.setAll(initialState, loadedActivities)
      },
      providesTags: (result, error, arg) => {
        if(result?.id){
          return [
            { type: 'Activity', id: 'LIST'},
            ...result.ids.map(id => ({ type:'Activity', id}))
          ]
        }else return [{type: 'Activity', id: 'LIST'}]
      }
    }),

  })
})

export const {
  useGetActivitiesQuery
} = activitiesApiSlice

//return the query result object
export const selectActivitiesResult = activitiesApiSlice.endpoints.getActivities.select()

//creates memoized selector
const selectActivitiesData = createSelector(
  selectActivitiesResult,
  activitiesResult => activitiesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds
  // Pass in a selector that returns the notes slice of state
} = activitiesAdapter.getSelectors(state => selectActivitiesData(state) ?? initialState)