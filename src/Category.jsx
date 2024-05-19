import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import images from '../src/img/new img.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';



const Category = () => {
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
    <>
    
    <div className='mt-3'>
    <img src={images} class="img-fluid w-100" alt="mi"/>
    <p className="headingStyle">Find recipes for every occasion<br/>
     Cooking has never been easier</p>
     <input className="btns" type="submit" value="SEARCH"></input>
     
  </div>



    <div className='d-flex flex-wrap gap-4 justify-content-center'>
      {category.map((item,index)=>(
        <div class="card "style={{width:'400px'}}>

<Link to={`/detail/${item.strCategory}`}>
<img src={item.strCategoryThumb}  class="img card-img-top" alt="recipe"/>
 </Link>

        <p class="card-text text-center">{item.strCategory}</p>
        
        </div>
    ))}
    </div>
    </>
  )
}

export default Category