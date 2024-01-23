import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

// console.log(localStorage.getItem("localTimerActivity"));
const initialState = 
// localStorage.getItem("localTimerActivity")
  // ? JSON.parse(localStorage.getItem("localTimerActivity"))
  // : 
  {
    user: null,
    title: "Pomodoro #0",
    description: "Chapter 1 | What is Pomodoro Technique? | How to Use? | Join Now",
    tags: ['pomodoro'],
    time: {
      type: "pomodoro",
      status: "default", //default | running | paused | completed | 
      duration: 25 * 60 * 1000, //default 25 min ( 25 * 60 s *1000 ms)
      remaining: 25 * 60 * 1000,
      timeStarted: null,
      timeEnd: null,
    },
    timerDurations: {
      pomodoro: 25 * 60 * 1000, //25 min
      shortBreak: 5 * 60 * 1000, //5 min
      longBreak: 15 * 60 * 1000, //5 min
    },
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
      if (value === 'running' && !state.time.timeStarted) {
        state.time.timeStarted = new Date().toString()
      } else if (value === 'completed') {
        state.time.timeEnd = new Date().toString()
      }
    },
    addNewTag: (state, action) => {
      state.tags.push(action.payload)
    },
    changeTimerType: (state, action) => {
      const newType = action.payload
      state.time.type = newType
      state.time.duration = state.timerDurations[`${newType}`]
    }
  }
})

export const selectTimer = (state) => state.timer
export const { editText, changeTimerStatus, addNewTag, changeTimerType } = timerSlice.actions

export default timerSlice.reducer;
