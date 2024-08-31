import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ meal }) {
  return (
    <>

      <div className=" col-lg-3 col-md-4  ">
        <Link to={`/${meal.idMeal}`}>
          <div className={`card position-relative text-black cursor-pointer rounded-2 overflow-hidden  `}>
            <img className='w-100' src={meal.strMealThumb} alt="" />
            <div className={`position-absolute top-100  start-0 w-100 h-100 d-flex p-3 align-items-center`} >
              <h2 className='fw-bold'>{meal.strMeal}</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}





