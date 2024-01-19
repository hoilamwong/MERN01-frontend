import { Link } from 'react-router-dom'
import Timer from '../features/timer/Timer'

const MainPage = () => {
  return (
    <div>
      <main >
        <Timer />
      </main>
      <footer>
        <Link to="/login">Login</Link> <br/>
        <Link to="/dash">Dash</Link>
        {/* <Link to="/setting">Setting</Link> */}
      </footer>
    </div>
  )
}

export default MainPage
