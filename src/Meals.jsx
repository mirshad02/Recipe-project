import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css'


const Meals = () => {
    let {meals}=useParams()
    const [meal,setMeal]=useState([''])
useEffect(()=>{
    let fetchData=async ()=>{
        let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`)
        console.log(response.data.meals);
        setMeal(response.data.meals)
    }
    fetchData()
},[])
  return (
    <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center '>
            {meal?.map((item)=>(
              <>
                   <div class="card "style={{width:'500px'}}>
                    <img src={item.strMealThumb} alt="" />
                    <h2>{item.strMeal}</h2>
                  </div>
                   <div>
                   <h2 style={{float:'left'}}>INSTRUCTIONS</h2>
                   <h2 className='a mt-5 '>{item.strInstructions}</h2>
                   <h2>VIDEO</h2>
                   {item.strYoutube && (
                            <iframe
                                width="500"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.strYoutube.split('v=')[1]}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                   )}
                    <h2>Ingredients:</h2>
                    {[...Array(20)].map((_, i) => {
                                const ingredient = item[`strIngredient${i + 1}`];
                                // Check if both ingredient and measure exist
                                if (ingredient) {
                                    return (
                                        <li key={i}>{` ${ingredient}`}</li>
                                    );
                                }
                                return null;
                            })}
                  </div>
            </>
            ))}    
    </div>
  )
}

export default Meals