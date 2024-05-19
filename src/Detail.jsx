import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Detail = () => { 
    let {catName}=useParams()
    const [details,setDetails]=useState([''])
useEffect(()=>{
    let fetchData=async ()=>{
        let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
        console.log(response.data.meals);
        setDetails(response.data.meals)
    }
    fetchData()
},[])
  return (
     <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center '>
            {details?.map((item)=>(
                   <div class="card "style={{width:'300px'}}>
                    <Link to={`/meals/${item.idMeal}`}>
                    <img className='w-100' src={item.strMealThumb} alt="" />
                    </Link>
                    <h2>{item.strMeal}</h2>
                  </div>
            ))}    
    </div>
  )
}

export default Detail