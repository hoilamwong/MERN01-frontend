import Timer from '../features/timer/Timer'
import MainInstruction from '../features/main/MainInstruction'

const MainPage = () => {
  return (
    <div className='h-lvh'>
      <div className='h-5/6 md:h-lvh'>
        <Timer />
      </div>
      <MainInstruction />
    </div>
  )
}

export default MainPage
