import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Detail';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Meals from './Meals';
import Allitems from './Allitems';
import Country from './Country';
import Countryfilter from './Countryfilter';
import Category from './Category';
import Navbars from './Navbars';
import Recipe from './Recipe.jsx';
import Search from './Search'
import SearchResult from './SearchResult';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Navbars/>}> 
  <Route index element={<Category/>}/> 
  <Route path='recipe' element={<Recipe/>}/> 
 <Route path='/detail/:catName' element={<Detail/>}></Route>
 <Route path='/meals/:meals' element={<Meals/>}></Route>
 <Route path='/allitems' element={<Allitems/>}></Route>
 <Route path='/country' element={<Country/>}></Route>
 <Route path='/cnf/:item' element={<Countryfilter/>}></Route>
 <Route path='/search' element={<Search/>}></Route>
 <Route path='/searchresult' element={<SearchResult/>}></Route>
 </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();