import UzbekistanSVG from "../icons/UzbekistanSVG"
import RussianSVG from "../icons/RussianSVG"
import EnglishSVG from "../icons/EnglishSVG"
import { useDispatch } from "react-redux"
import { setLanguage } from "../slices/settingsSlice"


function LanguageSelect() {
  const dispatch = useDispatch()


  return (
    <div className="language-select">
      <div onClick={() => dispatch(setLanguage('uz'))} className="language-item"><UzbekistanSVG />uz</div>
      <div onClick={() => dispatch(setLanguage('ru'))} className="language-item"><RussianSVG />ru</div>
      <div onClick={() => dispatch(setLanguage('en'))} className="language-item"><EnglishSVG />eng</div>
    </div>
  )
}

export default LanguageSelect