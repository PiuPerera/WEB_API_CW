import React, { Component } from "react";

class Cat extends Component {
    state = {
        buttonName: "Cat"
    };
    
    render() {
        return (
            <React.Fragment>
                <h1>Cat incomming...!</h1>
                <button>Click Here {this.state.buttonName} </button>
            </React.Fragment>
        ); 
    }
}

export default Cat;