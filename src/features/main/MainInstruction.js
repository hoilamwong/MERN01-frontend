import { useState } from 'react';
import { createSmallButtons, toggleDisplayContent } from '../helper';

const MainInstruction = () => {

  const instructions = ["What is Pomodoro?", "How to Use", "Join Us"]
  const [clicked, setClicked] = useState(instructions[0])


  const setContent = () => {
    let content
    if (clicked === "What is Pomodoro?") {
      content = (
        <span>
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.[2][1]
        </span>
      )
    } else if (clicked === "How to Use") {
      content = (
        <span>
          The original technique has six steps:

          Decide on the task to be done.
          Set the Pomodoro timer (typically for 25 minutes).[1]
          Work on the task.
          End work when the timer rings and take a short break (typically 5–10 minutes).[4]
          Go back to Step 2 and repeat until you complete four pomodoros.
          After four pomodoros are done, take a long break (typically 20 to 30 minutes) instead of a short break. Once the long break is finished, return to step 2.
          For the purposes of the technique, a pomodoro is an interval of work time.[1]
        </span>
      )
    } else if (clicked === "Join Us") {
      content = (
        <span>
          Joing Us!
        </span>
      )
    }
    return content
  }

  const handleClicked = (e) => {
    setClicked(e.target.name)

  }

  return (
    <div className='h-lvh'>
      <div className='h-fit bg-white/10 py-8'>
        <div>
          {createSmallButtons(clicked, instructions, handleClicked)}
        </div>
        {/* {toggleDisplayContent(clicked, instructions)} */}
        <div className='w-8/12 mx-auto pt-6 pb-2'>
          {setContent()}
        </div>
      </div>

    </div>
  )
}

export default MainInstruction