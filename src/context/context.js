import React, {Component} from 'react'

const MyContext = React.createContext()

let list = ['Call the Police', 'Sit down and relax', 'No answer for a such question', 'No', 'Yes', 'Maybe']

 class MyProvider extends Component {
     state = {
        screen: 0, 
        question: "",
        result:""
     }

      changeNextScreen = (value) => {
        this.setState({
            screen: value
        })
     }

     showQuestion = (value) => {
        this.setState({
            question: value
        })
     }

     getRandomValue = () => {
        return list[ Math.floor(Math.random()*list.length) ]
     }

     showResult = () => {
         let decided = this.getRandomValue()
         if (this.state.result !== "") {
            while(decided === this.state.result){
                decided = this.getRandomValue()
            }
         }
         this.setState({
             result: decided
         })
     }

     resetHandler = () => {
         this.setState({
            screen: 0, 
            question: "",
            result:""
         })
     }

    render() {
        return (
            <div>
                <MyContext.Provider value={{
                    state: this.state ,
                    changeScreen: this.changeNextScreen,
                    question: this.showQuestion,
                    result: this.showResult,
                    reset: this.resetHandler
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

export {MyContext, MyProvider}


