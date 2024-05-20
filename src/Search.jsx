import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import './Style.css';
// import './index.css'; // Import your custom CSS file for styling
import { FaSearch } from "react-icons/fa";

function Search() {
    const [recipe, setRecipe] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setRecipe(event.target.value);
    };

    const handleSubmit = () => {
        if (!recipe.trim()) {
            alert('Please enter a search term');
            return;
        }
        navigate("/searchresult", { state: { key: recipe } });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="search-container">
            <input
                type="search"
                id="form1"
                className="form-control search-input w-25 "
                placeholder='Search for recipes...'
                onChange={handleChange}
                value={recipe}
                onKeyDown={handleKeyPress}
            />
            <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary" 
                
            >
                <FaSearch/>
            </button>
        </div>
    );
}

export default Search;