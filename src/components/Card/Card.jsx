import React from 'react';
import cardimg from "../../assets/download (5).jpeg";

export default function Card() {  
  return (
    <div>
      <div className="col-md-3">
        <div className="position-relative rounded-3 overflow-hidden">
          <img src={cardimg} alt="Meal" className="w-100" />
          <div className="layer w-100 h-100 text-black">
           
          </div>
        </div>
        <h2>Meal Title</h2>
      </div>
    </div>
  );
}

