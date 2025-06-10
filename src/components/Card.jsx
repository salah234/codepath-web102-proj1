import React from "react";

const Card = (prop) => {
    const handleClick = () => {
        window.location.href = prop.gameLink;
    };
    return (
        <div className="card">
            <img src={prop.img}></img>
            <h1>{prop.teams}</h1>
            <h2>{prop.date}</h2>
            <button className="linkButton" onClick={handleClick}>Previous Game Link</button>


        </div>
    )

}

export default Card;