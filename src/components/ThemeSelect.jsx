import { useDispatch } from "react-redux"
import { setTheme } from "../slices/settingsSlice"


function ThemeSelect() {
  const dispatch = useDispatch()


  return (
    <div className="theme-select">
      <div onClick={() => dispatch(setTheme('dark'))} className="theme-item"><div className="bg-[#23313d]"></div>dark</div>
      <div onClick={() => dispatch(setTheme('black'))} className="theme-item"><div className="bg-[#000000]"></div>black</div>
      <div onClick={() => dispatch(setTheme('purple'))} className="theme-item"><div className="bg-[#b120a9]"></div>purple</div>
      <div onClick={() => dispatch(setTheme('green'))} className="theme-item"><div className="bg-[#247014]"></div>green</div>
      <div onClick={() => dispatch(setTheme('brown'))} className="theme-item"><div className="bg-[#ad3f1d]"></div>brown</div>
      <div onClick={() => dispatch(setTheme('paper'))} className="theme-item"><div className="bg-[#e6d27a]"></div>paper</div>
    </div>
  )
}

export default ThemeSelect