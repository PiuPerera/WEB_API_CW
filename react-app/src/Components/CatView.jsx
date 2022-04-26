import React, { Component } from "react";

class ViewCat extends Component{
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="container" style={{marginTop: "5px", marginBottom: "5px", paddingTop: "5px"}}>
                    <div className="row justify-content-start" style={{marginTop: "5px"}}>
                        <div className="col-lg-5 col-md-12 col-12" >
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" width="100%" style={{objectFit: "cover", objectPosition: "center", marginBottom: "7px"}}></img>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div style={{flexBasis: "24%", cursor: "pointer"}}>
                                    <img src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100px" alt="" style={{objectFit: "cover", objectPosition: "center"}}></img>
                                </div>
                                <div style={{flexBasis: "24%", cursor: "pointer"}}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg" width="100%" height="100px" alt="" style={{objectFit: "cover", objectPosition: "center"}}></img>
                                </div>
                                <div style={{flexBasis: "24%", cursor: "pointer"}}>
                                    <img src="https://cdn.pixabay.com/photo/2022/03/27/11/23/cat-7094808__340.jpg" width="100%" height="100px" alt="" style={{objectFit: "cover", objectPosition: "center"}}></img>
                                </div>
                                <div style={{flexBasis: "24%", cursor: "pointer"}}>
                                    <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" width="100%" height="100px" alt="" style={{objectFit: "cover", objectPosition: "center"}}></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <h3>Robert</h3>
                            <ul>
                                <li>Gender : Male</li>
                                <li>Age : 1.5 Years</li>
                                <li>Colour : Black & White</li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        );
    }
}

export default ViewCat;