import React from 'react'
import { useState, useEffect } from 'react';
import { getAllCategories } from '../service/CategoryService';
import { useNavigate } from 'react-router-dom';
import AssociationComponent from './AssociationComponent';

const FrontComponent = () => {
  const [categories, setcategories] = useState([])
  const [selectedValue, setSelectedValue] = useState('');

const navigate= useNavigate()

useEffect(() =>{
    listCategory()    
}, [])

function listCategory(){
  getAllCategories().then((response)=>{
      setcategories(response.data.show);
  }).catch(error=>{
      console.error(error)
  })
}

function navigateToAllCategory(){
navigate('/listcategory')
}

function navigateToAllProduct(){
  navigate('/listproduct')
}
      
      
      const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        // here will be the logic to for displying the product of that category
      };
  return (
    
        <div>
          {/* Render dropdown list */}
          <select value={selectedValue} onChange={handleDropdownChange}>
            <option value="">Select an option</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.categoryname}</option>
            ))}
          </select>
    
          {/* Display selected value */}
          {selectedValue && <AssociationComponent id={selectedValue} />}
          <div>
          <button className='btn btn-info' onClick={()=>navigateToAllProduct()}>All Products</button>
          <button className='btn btn-danger' onClick={()=>navigateToAllCategory()} style={{ marginLeft : "10px"}}>All Categories</button>
                           
          </div>
        </div>
      );
  
}

export default FrontComponent