import React, { Component } from "react";

class Cat extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "18rem", marginTop:"20px"}}>
                    <img className="card-img-top" src={this.props.cat.image} alt="Card image cap" height="200px" style={{objectFit: "cover", objectPosition: "center"}}></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.cat.name}</h5>
                        <ul>
                            <li>Age : {this.props.cat.age} Years</li>
                            <li>Gender : {this.props.cat.gender}</li>
                            <li>Colour : {this.props.cat.color}</li>
                        </ul>
                        <p className="card-text text-muted">{this.props.cat.description}</p>
                        <button className="btn btn-primary">View More</button>
                        <button type="button" className="btn btn-outline-primary" style={{marginLeft: "50px"}} onClick={this.props.onLike}>
                            <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-32-512.png" height ="25" width="25"></img>
                            <span className="badge bg-light" style={{color: "black"}}>{this.props.cat.likeCount}</span>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}

export default Cat;