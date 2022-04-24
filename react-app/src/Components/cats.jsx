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
                        <Cat 
                            key={cat.id} 
                            cat={cat} 
                            onLike={() => this.likeCat(cat)} 
                        />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        try{
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
        catch(err){
            return ("Error :", err.message);
        }
    }

    async likeCat(cat) {
        try{
            await axios.put(`http://localhost:4000/api/cats/${cat.id}`, {
            likeCount : cat.likeCount + 1
        });
        }
        catch(err){
            return ("Error :", err.message);
        }
        let updatedCats = [...this.state.allCats];
        let index = updatedCats.indexOf(cat);
        updatedCats[index] = {...cat};
        updatedCats[index].likeCount ++;
        this.setState({allCats : updatedCats})
    }
}

export default Cats;