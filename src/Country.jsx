import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Country = () => {
    let { country } = useParams();
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        let fetchData = async () => {
          try {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            setCountries(response.data.meals || []);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [country]);
    
      const handleItemClick = (selectedItem) => {
        // Do something with the selected item, such as navigating to its details
        console.log('Clicked item:', selectedItem);
        // Example: Navigate to the item details page
        // history.push(`/meals/${selectedItem.idMeal}`);
      };
    
      return (
        <>
        <div className='d-flex flex-wrap p-5 mt-5 gap-4 justify-content-center text-md-center text-bg-dark text-black '>
          {countries?.map((item) => (
              <div key={item.idMeal} className="card" style={{ width: '300px' }} onClick={() => handleItemClick(item)}>
             
             <Link to={`/cnf/${item.strArea}`}>
              <h2>{item.strArea}</h2>
              </Link>
            </div>
          ))}
        </div>
          </>
      );
    };


export default Country