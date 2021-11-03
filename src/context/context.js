import React, {Component} from 'react'


const MyContext = React.createContext()

 class MyProvider extends Component {
     state = {
        screen: 0, 
        question: ""
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

    render() {
        return (
            <div>
                <MyContext.Provider value={{
                    state: this.state ,
                    changeScreen: this.changeNextScreen,
                    question: this.showQuestion
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

export {MyContext, MyProvider}


