import React from "react";

function CardCondicionals({
    number,icon, text
}){
    return(
      <div>
        <p className="numbers">{number}</p>
        <img className="icons" src={icon} />
        <p>{text}</p>
      </div>
    )
}

export default CardCondicionals