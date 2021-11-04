import {useContext} from 'react'
import { MyContext } from '../context/context'


export default function Confirm() {
    const context = useContext(MyContext)

    const nextScreen = () => {
        context.changeScreen(2)
    }

    const firstScreen = () => {
        context.changeScreen(0)
    }
    return (
        <div>
            <h3> Your Question Is: </h3>
            <div className="viewer">
                {context.state.question}
            </div>
            <div className="animate__animated animate__zoomIn animate__delay-1s">
                <button className="btn" onClick={nextScreen} >Decide It</button>
                <button className="btn" onClick={firstScreen} >Ask a new question</button>
            </div>
        </div>
    )
}
