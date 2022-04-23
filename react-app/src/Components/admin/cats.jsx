import React, {Component} from "react";
import axios from "axios";
import Admincat from "../admin/adminCat";
//parent class
class AdminCat extends Component{
    state = {
        allCats: [],
    };
    render() {
        return <div className="container">
            <div className="row">
                {this.state.allCats.map(adminCat => (
                     <div key={adminCat.id} className="col" >
                        <Admincat key ={adminCat.id} adminCat = {adminCat}/>
                     </div>
                ))}   
            </div>
        </div>
    }

    //
    async componentDidMount() {
        const { data } = await axios.get("http://localhost:5000/api/cattylove");
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
            birthName : adminCat.birthname,
           };
       });
       this.setState({allCats : cats})
    }
}

export default AdminCat; 