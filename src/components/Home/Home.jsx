import React, { useState, useEffect } from 'react'; 
import styles from './Home.module.css';
import axios from "axios";
import Card from '../Card/Card.jsx'; 
import Loading from '../Loading/Loading.jsx'

function Home() { 
  const [meals, setMeals] = useState([]); 

  async function getData() {
    try {
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='); 
      setMeals(response.data.meals); 
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  }

  useEffect(() => { 
    getData();
  }, []); 

  return (
    <>
      {meals.length ? (
        <div className="row g-3">
          {meals.map((mealInfo, index) => (
            <Card meal={mealInfo} key={index} />
          ))}
        </div>
      ) : (
        <div><Loading/></div>
      )}
    </>
  );
}

export default Home;

  


