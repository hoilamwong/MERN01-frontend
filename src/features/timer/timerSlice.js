import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timer:{
    user: null,
    timerType: "pomodoro",
    status: 'paused', //started | paused | completed | 
    title: "Pomodoro",
    description: "no description yet",
    time: '25*60', //default 25 min ( 25 * 60 sec)
    tags: ['#pomodoro'],
    timeStarted: null 
  }
}

const timerSlice = createSlice({
  name:'timer',
  initialState,
  reducers:{
    timerEdited: {
      reducer(state, action){
        action.map(edit => {
          console.log(edit);
        })
        console.log('state', state.timer);
      }
    }
  }
})

export default timerSlice

