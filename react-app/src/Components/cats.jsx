import React, { Component } from "react";
import axios from "axios";
import Cat from "./CatCard";

class Cats extends Component{
    state = {
        allCats : []
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allCats.map(cat => (
                        <div className="col" key={cat.id}>
                        <Cat key={cat.id} cat={cat} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        const {data} = await axios.get("http://localhost:4000/api/cats");
        let cats = data.map((cat)=> {
            return {
                id : cat._id,
                name : cat.name,
                age : cat.age,
                gender : cat.gender,
                color : cat.color,
                description : cat.description,
                image : cat.imageUrl,
                likeCount : cat.likeCount
            };
        });
        this.setState({allCats : cats});
    }
}

export default Cats;