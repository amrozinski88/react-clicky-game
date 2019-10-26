import React from "react";
import "./Jumbotron.css";
import images from "../../assets/images/images";
import Card from "../Cards/Cards"
console.log(images)

const Jumbotron = ()=>{
    return (
        <div className="text-center pb-5" >

            <div className="container">
                <div className="row rowText d-flex justify-content-center align-items-center">
                    <h3>Click And Morty! Click any picture to play, dont click the same one twice</h3>
                 </div>
                 <div className="row">
                {images.map((link,index)=>{
                    return <Card key={index} imgFileName={link}/>
                })}

                 </div>
            </div>
        </div>
    )
}

export default Jumbotron;