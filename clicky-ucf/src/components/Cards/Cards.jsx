import React from "react";
import './Cards.css';

const Card = (props)=>{
    console.log(`../../assets/images/${props.imgFileName} `)
    return (
        <div className="col-3 imgSize my-2">
        <img className="img-fluid rounded" src={require(`../../assets/images/${props.imgFileName}`)} alt={props.imgFileName}/>
        </div>
    )
};


export default Card;

