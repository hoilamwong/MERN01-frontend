import { Outlet } from "react-router-dom";
import LayoutHeader from './LayoutHeader'

const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout