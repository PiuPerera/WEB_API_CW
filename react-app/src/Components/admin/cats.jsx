import React, {Component} from "react";
import axios from "axios";
import Admincat from "../admin/adminCat";

class AdminCat extends Component{
    state = {
        allCats : [], 
    };
    
    render() {
        return <div className="container">
            <div className="row">
                {this.state.allCats.map(adminCat => (
                     <div className="col" key={adminCat.id} >
                        <Admincat 
                            key ={adminCat.id} 
                            adminCat = {adminCat}
                            onLike={() => this.likeCat(adminCat)} 
                        />
                    </div>
                ))}   
            </div>
        </div>
    }

    //
    async componentDidMount() {
       try{
           const { data } = await axios.get("http://localhost:4000/api/cattylove");
           // console.log({data});
           let cats = data.map(adminCat => {
            return{
                    id: adminCat._id,
                    name: adminCat.name,
                    age : adminCat.age,
                    gender : adminCat.gender,
                    description : adminCat.description,
                    likeCount : adminCat.likeCount,
                    proPic : adminCat.proPic,
                    features: adminCat.features,
                    contactNo: adminCat.contactNo,
                    imageUrl : adminCat.imageUrl,
                    location : adminCat.location,
                };
            });
            this.setState({allCats : cats});
        }
        catch (ex){
            return ("Error :", ex.message);
        }
    }

    async likeCat(adminCat) {
        try{
            await axios.put(`http://localhost:4000/api/cattylove/${adminCat.id}`, {
                likeCount : adminCat.likeCount + 1
            }); 
            let updatedCats = [...this.state.allCats];
            let index = updatedCats.indexOf(adminCat);
            updatedCats[index] = {...adminCat};
            updatedCats[index].likeCount ++;
            this.setState({allCats : updatedCats})
        }
        catch(err){
            return ("Error :", err.message);
        }
    }
}

export default AdminCat; 