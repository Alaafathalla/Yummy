import React, { useState } from 'react';
import styles from './Home.module.css';
import axios from "axios";

const (meals,setMeals)=useState([])
export default Home;
<>

async function getData(meal) {
 let data= await.axios.get(www.themealdb.com/api/json/v1/1/search.php?s=);
 
 setMeal (data.meals)


useEffect(()=>getData();}
,[])

</>