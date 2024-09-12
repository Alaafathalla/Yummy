import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MealDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function getDetails() {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setDetails(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    getDetails();
  }, [id]); 

  return (
    <div className="row mx-2">
      <div className="col-md-6 p-5">
        <div className='p-5'>
          <img className="w-100 rounded-3" src={details.strMealThumb} alt={details.strMeal} />
        </div>
      </div>
      <div className="col-md-6 p-5">
        <span className="badge text-bg-secondary fs-4">{details.strMeal}</span>
        <p>
          <h3>Instructions:</h3> {details.strInstructions}
        </p>
        <h3>Area: {details.strArea}</h3>
        <h3>Category: {details.strCategory}</h3>
        <h3>Ingredients:</h3>
        <div className="d-flex flex-row flex-wrap">
          {Object.keys(details)
            .filter(key => key.includes('strIngredient') && details[key])
            .map((item, index) => (
              <span className="badge text-bg-warning m-1 fs-6" key={index}>{details[item]}</span>
            ))}
        </div>
        {details.strSource && (
          <a className="btn btn-primary fs-4 m-1" href={details.strSource} target="_blank" rel="noreferrer">Source</a>
        )}
        {details.strYoutube && (
          <a className="btn btn-danger fs-4 m-1" href={details.strYoutube} target="_blank" rel="noreferrer">YouTube</a>
        )}
      </div>
    </div>
  );
}



