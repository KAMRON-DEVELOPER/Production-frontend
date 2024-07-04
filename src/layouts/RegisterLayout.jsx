import { NavLink, Outlet } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";


function RegisterLayout() {
  return (
    <>
      <div className="flex flex-1 basis-1/5 p-[1.2%]">
        <div className="flex flex-col flex-1  rounded-4 bg-dark-100 px-2">
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="">Register <RiUserAddFill className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="verify">Verify <TbLogout2 className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="login">Login <IoLogIn className="inline absolute right-2 top-[3px]" size="18px" /></NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default RegisterLayout;
