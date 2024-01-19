import { Link } from 'react-router-dom'

const WelcomeUser = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

  const content = (
      <section className="welcome">

          {/* <p>{today}</p> */}

          <h1>Welcome!</h1>

          <p><Link to="/dash/user-setting">View User Setting</Link></p>
          <p><Link to="/dash/activities">View Activity</Link></p>
          <p><Link to="/dash/users">*View Users List</Link></p>
      </section>
  )

  return content
}

export default WelcomeUser