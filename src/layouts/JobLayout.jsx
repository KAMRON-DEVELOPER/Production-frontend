import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";


function StoreLayout() {
  const isOpen = useSelector(state => state.toggle.isOpen)


  return (
    <>
      <div className={isOpen ? 'lsidebar' : 'hidden'}>
        <div className="lsidebar-content">
          <NavLink className="base-link flex" to="">Hire Job</NavLink>
          <NavLink className="base-link flex" to="find">Find Job</NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default StoreLayout;