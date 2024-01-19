import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  title: "Pomodoro",
  description: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.",
  tags: ['#pomodoro'],
  time: {
    type: "pomodoro",
    status: 'paused', //started | paused | completed | 
    duration:25 * 60 * 1000, //default 25 min ( 25 * 60 s *1000 ms)
    timeStarted: null
  }
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    /* Update different text fields dynamically */
    editText: (state, action) => {
      const field = action.payload[0] //action.payload [e.target.name, e.target.value]
      const text = action.payload[1] //refer to Timer.js
      state[`${field}`] = text
    }
  }
})

export const selectTimer = (state) => state.timer
export const { editText } = timerSlice.actions


export default timerSlice.reducer;

