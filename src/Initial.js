import {React,useRef,useState} from 'react'

export default function Initial() {

    const textInput = useRef()
    const [showText, setShowBtn] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleChange = () => {
        if(textInput.current.value.length >= 5 ) {
            setShowBtn(true)
        }
    }

    const handleSubmit = () => {
        const value = textInput.current.value

        if (value.length >= 40) {
            setShowError(true)
            return
        }
    }

    return (
        <div>
           <h1>Ask A Question</h1>
           <input ref={textInput} onChange={handleChange} type="text" className="form-control" name="question" />
            {  showText ? (<button className="btn" onClick={handleSubmit} > Next </button>): <></>}
            {  showError ? (<p className="error" > Your question is too long. </p>): <></>}
           
        </div>
    )
}
