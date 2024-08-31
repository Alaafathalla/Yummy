import React from 'react'

export default function 
() {
  return (
        <>

      <div className="row">
        <div className="col-md-6 p-5">
          <div className="">
            <img className='w-100' src={mealDetails.strMealThumb} alt="" />
          </div>
        </div>
        <div className="col-md-6 p-5">
        <span className="badge text-bg-secondary fs-4">{mealDetails.strMeal}</span>
          <p><h3> Instructions:</h3> {mealDetails.strInstructions && mealDetails.strInstructions.split(' ').slice(3, 40).join(' ')}</p>
          <h3>Area : {mealDetails.strArea}</h3>
          <h3>Category : {mealDetails.strCategory}</h3>
          <h3> Details :  {mealDetails.ingredients?.map( (item, index)=>
          <div className="d-flex flex-row">
                <span className="badge text-bg-warning m-1 fs-6" key={index}> {item} </span>
          </div>
          )}</h3>
          <a className="btn btn-primary fs-4 m-1"  href = { `${mealDetails.strSource}`} target='_blank'> Source  </a>
          <a className="btn btn-danger fs-4 m-1"  href = { `${mealDetails.strYoutube}`} target='_blank' > Youtube  </a>

        </div>
      </div>
    </> 

  )
}

