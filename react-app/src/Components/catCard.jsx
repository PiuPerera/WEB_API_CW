import React, { Component } from "react";

class Cat extends Component {
    state = {
        catName: "Tommy",
        catGender: "Male",
        catAge: 1.5,
        catColor: "Black and Gray",
        catDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
        likeCount: 60
    };

    likeCat = () => {
        this.setState({likeCount: this.state.likeCount+1});
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={this.state.imageUrl} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.catName}</h5>
                        <ul>
                            <li>Age : {this.state.catAge} Years</li>
                            <li>Gender : {this.state.catGender}</li>
                            <li>Colour : {this.state.catColor}</li>
                        </ul>
                        <p className="card-text text-muted">{this.state.catDescription}</p>
                        <a href="#" className="btn btn-primary">View More</a>
                        <button type="button" className="btn btn-outline-primary" style={{marginLeft: "50px"}} onClick={this.likeCat}>
                            <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-32-512.png" height ="25" width="25"></img>
                            <span className="badge bg-light" style={{color: "black"}}>{this.state.likeCount}</span>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}

export default Cat;