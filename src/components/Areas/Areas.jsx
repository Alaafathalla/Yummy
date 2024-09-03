import React from 'react'
import style from '../Areas/Areas.module.css';
export default function 
() {
  return (
    <div>
       <div className="text-center py-3">
        <h2>SEARCH BY AREA </h2>
       </div>
      <div>
        <div className="row mx-5">
        <div className="col-4">
            <div className={` text-center color-info ${style.Area}  p-3 rounded-2 `}>
            <i className="fa-solid fa-house d-block"></i>
            <a href="" className='d-block'>american</a>
            </div>
        </div>
        <div className="col-4">
            <div className={` text-center color-info ${style.Area}  p-3 rounded-2 `}>
            <i className="fa-solid fa-house d-block"></i>
            <a href="" className='d-block'>american</a>
            </div>
        </div>
        <div className="col-4">
            <div className={` text-center color-info ${style.Area}  p-3 rounded-2 `}>
            <i className="fa-solid fa-house d-block"></i>
            <a href="" className='d-block'>american</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
