import { Link } from 'react-router-dom'

const DashHeader = () => {

    const content = (
        <header>
            <div>
                <Link to="/">
                    <h1>Pomnom</h1>
                </Link>
            </div>
        </header>
    )

    return content
}
export default DashHeader