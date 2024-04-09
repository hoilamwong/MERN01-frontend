import { Link } from 'react-router-dom'
import { MdAccountCircle, MdOutlineSettings, MdOutlineStorage  } from "react-icons/md";

const DashHeader = () => {

    const content = (
        <div className=' top-0 flex flex-row justify-between w-full h-0 px-4 fixed'>
            <Link to="/">
                <h2 title="Home" className='leading-tight'>Pomodooor</h2>
            </Link>
            
            <div className='hidden md:grid gap-3 py-2'>
                <Link to="/login">
                    <MdAccountCircle size={45} />
                </Link>
                <Link to="/login"> {/* Need to update to setting */}
                    <MdOutlineSettings size={45} />
                </Link>
                <Link to="/dash">
                    <MdOutlineStorage size={45} />
                </Link>
            </div>

        </div>
    )

    return content
}
export default DashHeader