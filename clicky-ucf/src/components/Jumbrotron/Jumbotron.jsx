import React from "react";
import "./Jumbotron.css";
import images from "../../assets/images/images";
import Card from "../Cards/Cards"

const Jumbotron = (props)=>{
    images.sort(()=>Math.random()-0.5)
    return (
        <div className="text-center pb-5" >

            <div className="container">
                <div className="row rowText d-flex justify-content-center align-items-center">
                    <h3>Click And Morty! Click any picture to play, dont click the same one twice</h3>
                 </div>
                 <div className="row imagesRow d-flex justify-content-center">
                {images.map((link,index)=>{
                    return <Card key={index} handlePicClick={props.handlePicClick} imgFileName={link}/>
                })}

                 </div>
            </div>
        </div>
    )
}

export default Jumbotron;