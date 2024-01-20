import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  title: "Pomodoro #0",
  description: "Chapter 1 | What is Pomodoro Technique? | How to Use? |",
  tags: ['pomodoro'],
  time: {
    type: "pomodoro",
    status: "default", //default | running | paused | completed | 
    duration: 0.1 * 60 * 1000, //default 25 min ( 25 * 60 s *1000 ms)
    remaining: 0.05 * 60 * 1000,
    timeStarted: null,
    timeEnd: null,
  }
}


const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    /* Update different text fields dynamically */
    editText: (state, action) => {
      //action.payload : [e.target.name, e.target.value]
      const field = action.payload[0] //refer to Timer.js
      const value = action.payload[1]
      state[`${field}`] = value
    },
    changeTimerStatus: (state, action) => {
      const { type, value } = action.payload
      state.time[`${type}`] = value
      // console.log(state.time.remaining);
      if (value === 'running' && !state.time.timeStarted ) {
        state.time.timeStarted = new Date().toString()
        // console.log("UTC string:");
        // console.log(dt.toUTCString());
        // console.log("Local string");
        // console.log(dt.toString());
        // console.log("Hours UTC:   " + dt.getUTCHours());
        // console.log("Hours local: " + dt.getHours());
      }else if(value === 'completed' ){
        state.time.timeEnd = new Date().toString()
      }
      console.log(state.time.timeStarted, state.time.timeEnd);
    },
  }
})

export const selectTimer = (state) => state.timer
export const { editText, changeTimerStatus } = timerSlice.actions

export default timerSlice.reducer;
