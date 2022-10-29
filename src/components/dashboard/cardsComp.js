import React from "react";

function CardComp(props) {
  return (
    //Dashboard Cards with images
    <div>
      <div class="card mx-4" style={{ width: "18rem", height: "300px" }}>
        <img class="card-img-top" src={props.url} alt="Card  cap" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
