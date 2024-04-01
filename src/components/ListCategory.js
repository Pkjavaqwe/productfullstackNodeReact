import React from 'react'
import { useState, useEffect } from 'react'
import { deleteCategory, getAllCategories } from '../service/CategoryService'
import { useNavigate } from 'react-router-dom'
const ListCategory = () => {
    const [categories, setcategories] = useState([])


    const navigate =useNavigate()

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
    
    function addNewCategory(){
        navigate('/add-category')//route to category component
    }
    function updateCategory (id){
        console.log(id)
        navigate(`/update-category/${id}`)//route to category component
    }

    function removeCategory(id){
        deleteCategory(id).then((response)=>{
            listCategory()
        }).catch(error=>{
            console.error(error)
        })
    }


  return (
    <div className='container'>
        
    <h2 className='text-center'>List Of Categories</h2> 
    <button className='btn btn-primary mb-2' onClick={addNewCategory}>Add Category</button>
    <div>
       <table className='table table-bordered table-striped'>
       
           <thead>
               <tr>
                   <th></th>
                   <th>CatgoryName</th>
                   <th>CategoryId</th>
                   <th>Action</th>
               </tr>
           </thead>
           <tbody>
               {
                   categories.map(category => 

                       <tr key = {category.id}>
                           <td>{category.categoryname}</td>
                           <td>{category.categoryid}</td> 
                           <td>
                               <button className='btn btn-info' onClick={()=>updateCategory(category.id)}>Update Catgory</button>
                               <button className='btn btn-danger' onClick={()=>removeCategory(category.id)} style={{ marginLeft : "10px"}}>Delete Category</button>
                           </td>                      
                       </tr>

                   )

               }
               

           </tbody>
           
       </table>
    </div>


   </div>
  )
}

export default ListCategory