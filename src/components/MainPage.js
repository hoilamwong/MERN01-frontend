import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <header>
        <h1>Pomodoro Timer</h1>

      </header>
      <main >
        <h1>25:00</h1>

        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
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
