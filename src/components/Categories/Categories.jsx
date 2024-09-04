import React from 'react';
import img from '../../assets/download (5).jpeg';
import style from '../Categories/categories.module.css';
export default function Categories() {
  return (
    <div>
      <div className="text-center py-5">
        <h3>CATEGORY</h3>
      </div> 
      
      <div className="container">
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

