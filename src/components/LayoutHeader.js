import { Link } from 'react-router-dom'

const DashHeader = () => {

    const content = (
        <header>
            <div>
                <Link to="/">
                    <h2 className='absolute'>Pomnom</h2>
                </Link>
            </div>
        </header>
    )

    return content
}
export default DashHeader