import { NavLink, Outlet } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";


function AuthenticationLayout() {
  const isOpen = useSelector(state => state.toggle.isOpen)


  return (
    <>
      <div className={isOpen ? 'lsidebar' : 'hidden'}>
        <div className="lsidebar-content">
          <NavLink className="base-link flex" to="">Register <RiUserAddFill className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
          <NavLink className="base-link flex" to="verify">Verify <TbLogout2 className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
          <NavLink className="base-link flex" to="login">Login <IoLogIn className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default AuthenticationLayout;
