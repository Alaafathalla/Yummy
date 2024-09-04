import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css';

export default function Card({ meal }) {
  return (
    <div className="col-3 p-3 m-0">

      <Link to={`/${meal.idMeal}`}>
        <div className={`${style.card} position-relative text-black cursor-pointer rounded-2 overflow-hidden`}>
          <img className='w-100' src={meal.strMealThumb} alt={meal.strMeal} />
          <div className={`${style.layer} position-absolute start-0 top-0 w-100 h-100 d-flex p-3 align-items-center justify-content-center`}>
            <h2 className='fw-bold text-white'>{meal.strMeal}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}







