import { NavLink, Outlet } from "react-router-dom"
import { RxDashboard } from "react-icons/rx";
import { FaRegNoteSticky } from "react-icons/fa6";
import { BsBookmarks } from "react-icons/bs";
import { BsFileEarmarkPost } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdGolfCourse } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";


function HomeLayout() {
  return (
    <>
      <div className="flex flex-1 basis-1/5 p-[1.2%]">
        <div className="flex flex-col flex-1  rounded-4 bg-dark-100 px-2">
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="">Dashboard <RxDashboard className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="notes">Notes <FaRegNoteSticky className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="bookmarks">Bookmarks <BsBookmarks className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="posts">Your Posts <BsFileEarmarkPost className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="chats">Your Chats <IoChatbubblesOutline className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="groups">Your Groups <MdOutlineGroups3 className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="courses">Your Courses <MdGolfCourse className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
          <NavLink className={'text-letter-100 rounded-3 bg-dark-200 border-1 border-gray-700 px-2 mt-2 relative'} to="movies">Your Cinema <BiSolidCameraMovie className="inline absolute right-2 top-[3px]" size="18px"/></NavLink>
        </div>
      </div>
      
      <Outlet />
    </> 
  );
}

export default HomeLayout;
