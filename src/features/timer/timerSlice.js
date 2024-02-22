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
  timerType: "POMODORO",
  timerStatus: "default", //default | running | paused | completed | 
  timerDuration: 25 * 60 * 1000, //default 25 min ( 25 * 60 s *1000 ms)
  timerRemaining: 23 * 60 * 1000,
  timerStarted: null,
  timerEnd: null,
  timerDefaults: {
    POMODORO: 25 * 60 * 1000, //25 min
    SHORTBREAK: 5 * 60 * 1000, //5 min
    LONGBREAK: 15 * 60 * 1000, //5 min
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
    addNewTag: (state, action) => {
      state.tags.push(action.payload)
    },
    changeTimerStatus: (state, action) => {
      state.timerStatus = action.payload
      if (action.payload === 'running' && !state.timerStarted) {
        state.timerStarted = new Date().toString()
      } else if (action.payload === 'completed') {
        state.timerEnd = new Date().toString()
      }
    },
    changeTimerRemaining: (state, action) => {
      state.timerRemaining = action.payload
    },
    changeTimerType: (state, action) => {
      const newType = action.payload
      state.timerStatus = "default"
      state.timerType = newType
      state.timerDuration = state.timerDefaults[`${newType}`]
      state.timerRemaining = state.timerDuration
    },
    resetTimer: (state, action) => {
      state.timerStatus = "default"
      state.timerRemaining = state.timerDuration
    },
    toggleTimer: (state, action) => {
      let value

      if (state.timerStatus === "default") {
        value = "running"
      } else if (state.timerStatus === "running") {
        value = "paused"
      } else if (state.timerStatus === "paused") {
        value = "running"
      } else if (state.timerStatus === "completed") {
        value = "default"
        resetTimer()
      }

      state.timerStatus = value
    },

  }
})

export const selectTimer = (state) => state.timer
export const {
  editText,
  addNewTag,
  changeTimerStatus,
  changeTimerType,
  changeTimerRemaining,
  resetTimer,
  toggleTimer,
} = timerSlice.actions

export default timerSlice.reducer;
