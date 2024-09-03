import React from 'react';
import img from '../../assets/download (5).jpeg';
import style from '../Ingredients/ingredients.module.css';
export default function Ingredients() {  
  return (
    <div>
      <div className="text-center py-4">
        <h2 >INGREDIENTS</h2>  
      </div> 
      <div>
    <div className="row mx-5">
        <div className="col-3">
        <div className={`${style.card} position-relative text-black cursor-pointer rounded-2 overflow-hidden`}>
          <img className='w-100' src={img}  />
          <div className={`${style.layer} position-absolute start-0 top-0 w-100 h-100 d-flex p-3 align-items-center justify-content-center`}>
            <h2 className='fw-bold text-white'>hhio</h2>
          </div>
        </div>
        </div>
    </div>
      </div>
    </div>
  );
}

