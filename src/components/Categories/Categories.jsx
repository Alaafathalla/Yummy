import React from 'react';
import img from '../../assets/download (5).jpeg';

export default function Categories() {
  return (
    <div>
      <div className="text-center py-5">
        <h3>CATEGORY</h3>
      </div> 
      
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className='card position-relative text-black cursor-pointer rounded-2 overflow-hidden'>
            <img src={img} alt="Category" className='w-100'  />
          </div>
          <div className={`position-absolute top-100  start-0 w-100 h-100 d-flex p-3 align-items-center`} >
              <h2 className='fw-bold'>meal</h2>
            </div>
          </div>
          <div className="col-3">
            <div className='card position-relative text-black cursor-pointer rounded-2 overflow-hidden'>
            <img src={img} alt="Category" className='w-100'  />
          </div>
          <div className={`position-absolute top-100  start-0 w-100 h-100 d-flex p-3 align-items-center`} >
              <h2 className='fw-bold'>meal</h2>
            </div>
          </div>
          <div className="col-3">
            <div className='card position-relative text-black cursor-pointer rounded-2 overflow-hidden'>
            <img src={img} alt="Category" className='w-100'  />
          </div>
          <div className={`position-absolute top-100  start-0 w-100 h-100 d-flex p-3 align-items-center`} >
              <h2 className='fw-bold'>meal</h2>
            </div>
          </div>
          <div className="col-3">
            <div className='card position-relative text-black cursor-pointer rounded-2 overflow-hidden'>
            <img src={img} alt="Category" className='w-100'  />
          </div>
          <div className={`position-absolute top-100  start-0 w-100 h-100 d-flex p-3 align-items-center`} >
              <h2 className='fw-bold'>meal</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

