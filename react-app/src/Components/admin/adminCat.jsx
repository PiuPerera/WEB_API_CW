import React, {Component} from "react";

class Admincat extends Component {
    state = [];
   
    likeAvenger = (addCounter) => {
        this.setState({likeCount: this.state.likeCount + addCounter});
    }
    render () {
        return (
            <React.Fragment>
                <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top"  style = {{height: "300px"}} 
                    src={this.props.adminCat.proPic} 
                    alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.adminCat.name}</h5>
                        <ul>
                            <li>Age : {this.props.adminCat.age} Years</li>
                            <li>Gender : {this.props.adminCat.gender}</li>
                            <li>location : {this.props.adminCat.location}</li>
                        </ul>

                        <p className="card-text text-muted">{this.props.adminCat.description}</p>
                        <button className="btn btn-primary">View More</button>
                        <button type="button" className="btn btn-outline-primary" style={{marginLeft: "50px"}}   onClick={this.likeCat}>
                            <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-32-512.png" height ="25" width="25" alt="..."/>
                            <span className="badge bg-light" style={{color: "black"}}>{this.props.adminCat.likeCount}</span>
                        </button>
                    </div>
                </div>
                <br/>

            </React.Fragment>
        )
    }
}

export default Admincat;