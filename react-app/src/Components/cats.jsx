import React, { Component } from "react";
import Cat from "./CatCard";

class Cats extends Component{
    state = {
        allCats : [
            {
                id: 1,
                name: "Robert",
                age: 1.5,
                color: "Brown",
                likeCount: 30
            },
            {
                id: 2,
                name: "Maggy",
                age: 0.7,
                color: "Black & White",
                likeCount: 45
            },
            {
                id: 3,
                name: "Henry",
                age: 1.5,
                color: "Brown",
                likeCount: 25
            },
            {
                id: 4,
                name: "Barry",
                age: 1.5,
                color: "Brown",
                likeCount: 25
            },
            {
                id: 5,
                name: "Kate",
                age: 1.5,
                color: "Brown",
                likeCount: 25
            },
            {
                id: 6,
                name: "Kitty",
                age: 1.5,
                color: "Brown",
                likeCount: 25
            },
            {
                id: 7,
                name: "Henry",
                age: 1.5,
                color: "Brown",
                likeCount: 25
            },
        ]
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allCats.map(cat => (
                        <div className="col" key={cat.id}>
                        <Cat key={cat.id} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Cats;