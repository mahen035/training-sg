import { Component } from "react";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }
        this.changeState=this.changeState.bind(this)
    }
    changeState(){
        this.setState({
            counter:this.state.counter+1
        })
    }
    render(){
        return(
            <div>
               <h1>Hello {this.props.name} This is my class component</h1> 
               <p>Button is clicked: {this.state.counter} times!</p>
               <button onClick={this.changeState}>Counter</button>
            </div>
        )

    }
}

export {Header}