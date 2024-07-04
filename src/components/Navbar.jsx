import { NavLink } from "react-router-dom"
// import { useMediaQuery } from 'react-responsive'
// import { useDispatch } from "react-redux";
// import { NavbarSearch, ThemeSelect, LanguageSelect } from '../components/index'


function Navbar() {
  // const isLaptop = useMediaQuery({ minWidth: 1200 })
  // const isMobile = useMediaQuery({ maxWidth: 480 })
  // const dispatch = useDispatch()


  return (
    <>
      <NavLink to="dashboard">Home</NavLink>
      <NavLink to="community">Community</NavLink>
      <NavLink to="bookmarks">Education</NavLink>
      <NavLink to="entertainment">Cinema</NavLink>
      <NavLink to="job">Job</NavLink>
      <NavLink to="ai">AI</NavLink>
    </>
  )
}

export default Navbar