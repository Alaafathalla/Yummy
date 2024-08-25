import React, { useState, useEffect } from 'react'; 
import styles from './Home.module.css';
import axios from "axios";
import Card from '../Card/Card.jsx'; 

function Home() { 
  const [meals, setMeals] = useState([]); 

  async function getData() {
    let data = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='); 
    setMeals(data.data.meals); 
  }

  useEffect(() => { 
    getData();
  }, []); 

  return (
    <>
      {meals.map((mealInfo, index) => (
        <Card meal={mealInfo} key={index}/> 
      ))}
    </>
  );
}

export default Home;


