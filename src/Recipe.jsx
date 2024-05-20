import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Recipe = () => {
    const[category,setCategory]=useState([])
    useEffect(()=>
    {
        let fetchdata=async()=>{
            let response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log(response.data)
            setCategory(response.data.categories)
        }
        fetchdata()
        },[])
  return (
    <div className='d-flex flex-wrap gap-4 justify-content-center mt-4'>
      {category.map((item,index)=>(
        <div class="card "style={{width:'400px'}}>

<Link to={`/detail/${item.strCategory}`}>
<img src={item.strCategoryThumb}  class="img card-img-top" alt="recipe"/>
 </Link>

        <p class="card-text text-center">{item.strCategory}</p>
        </div>
    ))}
    </div>
  )
}

export default Recipe