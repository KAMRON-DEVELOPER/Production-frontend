import { useState } from "react"


const useStringValidator = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const validateInput = () => {
        const letters = /^[a-zA-Z]+$/
        return letters.test(value)
    }

    const validateColor = validateInput() ? 'text-cyan-500' : 'text-red-500'

    return { value, onChange, validateInput, validateColor }
}

export { useStringValidator }