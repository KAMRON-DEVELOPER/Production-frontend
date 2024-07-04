import { useState } from "react"
import { LuSearch } from "react-icons/lu";


function NavbarSearch() {
  const [searchText, setSearchText] = useState('')


  const navbar_search = (e) => {
    setSearchText(e.target.value)
    console.log(e.target.value)
  }


  return (
    <>
      <div className="navbar-search">
        <LuSearch className="navbar-search-icon" />
        <input onChange={navbar_search} value={searchText} placeholder="search" type="text" className="navbar-search-input rounded-full" />
      </div>
    </>
  )
}

export default NavbarSearch