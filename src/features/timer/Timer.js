import { useSelector, useDispatch } from 'react-redux'
import { IoIosAdd, IoIosRefresh } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { selectTimer, editText, changeTimerStatus, addNewTag } from './timerSlice'
import { formatDate, createSmallButtons } from '../helper'
import { useEffect, useState, useRef } from 'react';

export default function Timer() {
  const TIMER_TYPES = ['Pomodoro', 'Short Break', 'Long Break']

  const dispatch = useDispatch()
  const timer = useSelector(selectTimer)
  const currentStatus = timer.time.status

  const [seconds, setSeconds] = useState(timer.time.remaining)
  const [newTag, setNewTag] = useState("")

  let titleString = ' | Pomodooor Timer | '

  if (currentStatus === "running") {
    titleString = formatDate(seconds) + ' ' + timer.title + titleString
  } else if (currentStatus === "running") {
    titleString = formatDate(seconds) + ' ' + timer.title + titleString
  }
  document.title = titleString

  useEffect(() => {
    localStorage.setItem('localTimerActivity', JSON.stringify(timer))
  }, [timer])

  /* Set Timer to Paused when Changed to Other Site */
  // useEffect(()=> () => {
  //     window.confirm('The Time will be paused. :(')
  //     dispatch(changeTimerStatus({ type: "status", value: "paused" }))
  //   },[])

  /* Set second every second if status is 'running' */
  useEffect(() => {
    let intervalCounter
    if (timer.time.status === 'running') {
      intervalCounter = setInterval(function () {
        setSeconds((prevSec) => {
          if (prevSec <= 0) {
            clearInterval(intervalCounter)
            return 0
          }
          return prevSec - 1000
        })
      }, 1000)
      return () => clearInterval(intervalCounter)
    }
  }, [timer.time.status])

  useEffect(() => {
    if (timer.time.status !== 'running') return
    if (seconds > -1) {
      dispatch(changeTimerStatus({ type: "remaining", value: seconds }))
    } else {
      dispatch(changeTimerStatus({ type: "status", value: "completed" }))
    }
  }, [seconds])

  const timerTags = () => {
    return (
      <div className='mt-2 flex justify-center items-center w-3/4 mx-auto'>
        <div className='text-clip truncate w-fit mr-1 z-10'>
          {timer.tags.map(tag => (
            <button key={tag} className='btn_small_basic bg-teal-700 
            hover:bg-teal-600 transition delay-100 '>
              #{tag}
            </button>
          ))}
        </div>
        {/* add tag button */}
        <form
          className='no_ring z-10 rounded-full border border-white/50  w-28 min-w-28
            hover:bg-white/20 transition delay-100 cursor-pointer'
          onSubmit={(e) => handleAddTag(e)}
        >
          <IoIosAdd size={25} className='absolute inline-block' />
          <input
            placeholder="Add Tags ..."
            name='tags'
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className='w-full truncate focus:ring-5 rounded-full pl-6 text-left'
          />
        </form>
      </div>
    )
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    dispatch(addNewTag(newTag))
    setNewTag("")
  }

  const handleChangeType = (e) => {
    dispatch(changeTimerStatus({ type: "type", value: e.target.name }))
  }

  const handleToggleTimer = (e) => {
    let value
    if (currentStatus === "default") {
      value = "running"
    } else if (currentStatus === "running") {
      value = "paused"
    } else if (currentStatus === "paused") {
      value = "running"
    }
    dispatch(changeTimerStatus({ type: "status", value }))
  }

  const handleResetTimer = (e) => {
    dispatch(changeTimerStatus({ type: "status", value: "default" }))
    dispatch(changeTimerStatus({ type: "remaining", value: timer.time.duration }))
    setSeconds(timer.time.duration)
  }

  const timerActionsButtons = () => {
    return (
      <div className='py-2 flex flex-row items-center justify-center'>
        <GiSaveArrow //@Todo: add save functionality
          size={60}
          name='completed'
          className='text-green-200/30 hover:text-inherit transition delay-75'
        />
        {currentStatus === "paused" || currentStatus === "default" ?
          <FaPlay
            size={80}
            onClick={handleToggleTimer}
            className=' text-white/40 hover:text-inherit transition delay-75 mx-5'
          />
          :
          <FaPause
            size={80}
            onClick={handleToggleTimer}
            className='text-white/40 hover:text-inherit transition delay-75 mx-5'
          />
        }

        <IoIosRefresh
          size={65}
          name='default'
          onClick={handleResetTimer}
          className='text-green-200/30 hover:text-inherit transition delay-75'
        />

      </div>
    )
  }

  return (
    <div className='h-full flex flex-col justify-center lg:justify-between pb-16'>
      {/* TIMER TYPE BUTTONS */}
      <div className='pt-24 h-7 md:pt-0'>
        <div className='hidden md:inline transition-all'>
          {createSmallButtons(
            timer.time.type,
            TIMER_TYPES,
            handleChangeType
          )}
        </div>
      </div>

      {/* TIMER CONTENT*/}
      <div className='h-fit'>
        {/* TIMER TITLE */}
        <h1>
          <input
            value={timer.title}
            name='title'
            onChange={(e) => dispatch(editText([e.target.name, e.target.value]))}
            onSubmit={(e) => dispatch(addNewTag(newTag))}
            className='mb-1 text-clip w-7/12
              tracking-tight lg:tracking-[0.4em] md:tracking-[0.2em]  
              hover:bg-teal-200/10 delay-400 transition-all ease-linear'
          />
        </h1>

        {/* TIMER DESCRIPTION */}
        <input
          value={timer.description}
          name='description'
          onChange={(e) => dispatch(editText([e.target.name, e.target.value]))}
          className='truncate tracking-widest py-1 
          hover:bg-teal-200/10 transition-all w-9/12 md:w-8/12 lg:w-5/12'
        />
        <br />

        {/* TIMER TAGS */}
        {timerTags()}

        {/* TIMER*/}
        <div
          className='tracking-wider leading-none py-5 text-stone-100 select-none
          text-[10em] md:text-[15em] delay-500 transition-all ease-linear'
        >
          {formatDate(seconds)}
        </div>
      </div>

      {/* TIMER ACTION*/}
      {timerActionsButtons()}
    </div>
  )
}
