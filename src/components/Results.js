import {useContext, useEffect} from 'react'
import { MyContext } from '../context/context'



export default function Results() {

const context = useContext(MyContext)

useEffect(()=>{
    context.result()
},[])
    return (
        <div>
            <h3> Your Answer Is: </h3>
            <div className="viewer">
                {context.state.result}
            </div>
            <div className="animate__animated animate__zoomIn animate__delay-1s">
                <button className="btn" onClick={context.reset} > Start Over </button>
                <button className="btn" onClick={context.result} > Decide Again </button>
            </div>
        </div>
    )
}
