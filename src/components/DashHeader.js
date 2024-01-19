import { Link } from 'react-router-dom'

const DashHeader = () => {

  const content = (
    <div>
      <Link to="/dash">
        <h1>User Dash</h1>
      </Link>
      <nav>
        {/* add nav buttons later */}
      </nav>
    </div>
  )

  return content
}
export default DashHeader