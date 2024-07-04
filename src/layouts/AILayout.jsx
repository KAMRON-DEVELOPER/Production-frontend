import { NavLink, Outlet } from "react-router-dom"


function AILayout() {
  return (
    <>
      <div className="flex flex-1 basis-1/5 p-[1.2%]">
        <div className="flex flex-col flex-1  rounded-4 bg-dark-100 px-2">
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2'} to="">Image Editor</NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2'} to="text_to_image">Text to Image</NavLink>
        </div>
      </div>

      <Outlet />
    </> 
  );
}

export default AILayout;