import React from "react";
import './Cards.css';

const Card = (props)=>{
    return (
        <div className="col-3 imgSize m-2">
        <img onClick={props.handlePicClick} className="img-fluid rounded" src={require(`../../assets/images/${props.imgFileName}`)} alt={props.imgFileName}/>
        </div>
    )
};


export default Card;

