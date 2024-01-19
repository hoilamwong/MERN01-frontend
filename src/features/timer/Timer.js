import { useSelector, useDispatch } from 'react-redux'
import {
  selectTimer,
  editText
} from './timerSlice'
import { formatDate } from '../helper'
import { IoIosAdd } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";

export default function Timer() {
  const dispatch = useDispatch()
  const timer = useSelector(selectTimer)

  const TIMER_ACTIONS = ['Start', 'Pause', 'Reset']
  const TIMER_TYPES = ['Pomodoro', 'Short Break', 'Long Break']

  const timerActionsButtons = () => {
    return (
      <div className='py-2 flex-col items-center'>
        <button className=' hover:text-green-200/30 transition delay-75'>
          <FaPlay size={80} />
        </button>
        <button className='text-green-200/30 hover:text-inherit transition delay-75'>
          <IoIosRefresh size={70} />
        </button>
        <button className='text-green-200/30 hover:text-inherit transition delay-75'>
          <GiSaveArrow   size={60} />
        </button>
      </div>
    )
  }

  const timerTypesButtons = () => {
    /* change bg-color when the timer type matches the action type of the button */
    const bgColor = (actionType) => {
      return (
        timer.time.type.toUpperCase().search(actionType.toUpperCase()) !== -1 ?
          'bg-white/30' : ''
      )
    }

    return (
      <div className='py-5'>
        {TIMER_TYPES.map(type => (
          <button key={type} className={`btn_small_basic hover:bg-white/30 transition delay-100 ${bgColor(type)}`}>
            {type}
          </button>
        ))}
      </div>
    )
  }

  const timerTags = () => {
    return (
      <div className='mt-3 flex justify-center items-center'>
        {timer.tags.map(tag => (
          <button key={tag} className='btn_small_basic bg-teal-700 hover:bg-teal-600 transition delay-100'>
            {tag}
          </button>
        ))}
        <button className='rounded-full border transition delay-100'>
          <IoIosAdd size={25} />
        </button>
      </div>
    )
  }

  const DurationDisplay = () => {
    return (
      <span className='transition delay-75'>
        {formatDate(timer.time.duration)}
      </span>
    )
  }

  return (
    <div className=''>
      {timerTypesButtons()}
      <div className='mt-16'>
        <h1>
          <input
            value={timer.title}
            name='title'
            onChange={(e) => dispatch(editText([e.target.name, e.target.value]))}
            className='tracking-[0.4em] w-7/12 transition delay-75 '
          />
        </h1>
        <input
          value={timer.description}
          name='description'
          onChange={(e) => dispatch(editText([e.target.name, e.target.value]))}
          className='tracking-widest w-9/12 transition py-1'
        />
        <br />
        {timerTags()}

        <div
          className='text-[15em] tracking-wider leading-tight text-stone-100'
        >
          <DurationDisplay />
        </div>
      </div>
      {timerActionsButtons()}

    </div>
  )
}
