import React from 'react';

export default function Card({ meal }) {  
  return (
    <div className="col-md-3">
      <div className="position-relative rounded-3 overflow-hidden">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-100" />  
        <div className="layer w-100 h-100 text-black">
          {/* You can add content here if needed */}
        </div>
      </div>
      <h2>{meal.strMeal}</h2>
    </div>
  );
}

