import { useContext } from "react"
import 'animate.css';
import { MyContext } from "./context/context"
import Initial from "./components/Initial"
import Confirm from "./components/Confirm"
import Results from "./components/Results"
import "./assets/App.css"


const App = () => {
  const context = useContext(MyContext)

  const handleComponents = () => {

    const screen = context.state.screen;
        
        if (screen === 0) return <Initial /> 
        if (screen === 1) return <Confirm /> 
        if (screen === 2) return  <Results />
  }
  return (
    <div className="container">
      {handleComponents()}
    </div>
  );
}

export default App;
