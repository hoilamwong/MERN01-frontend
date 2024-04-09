import { Outlet } from "react-router-dom";
import LayoutHeader from './LayoutHeader'

const Layout = () => {
  return (
    <div className="overflow-x-hidden relative">
      <LayoutHeader />
      <div className="h-lvh py-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout