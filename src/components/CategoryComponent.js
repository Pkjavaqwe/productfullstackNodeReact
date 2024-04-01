import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategory, saveCategory, updateCategory } from '../service/CategoryService'

const CategoryComponent = () => {
  const navigate = useNavigate()
 
  const [categoryname, setcategoryname] = useState('')
  const [categoryid, setcategoryid] = useState()
  
  const {id} = useParams()
      function saveOrUpdateCategory(e){
          e.preventDefault()
          const category = {categoryname,categoryid}
          console.log(category)

          if(id){
            updateCategory(id,category).then((response)=>{
              navigate('/listcategory')
            })
          }else{
            saveCategory(category).then((response)=>{
              console.log(response.data)
              navigate('/listcategory')
            }).catch(error=>{
              console.log(error)
            })
          }
      }
      function pageTitle(){
        if(id){
          return <h2 className= 'text-center'>Update Category</h2>
      }else{
          return <h2 className= 'text-center'>Add Category</h2>        
      }
      }
      useEffect(() => {
        
        if(id){
         getCategory(id).then((response)=>{
          console.log(response.data)
          setcategoryname(response.data.categoryname)
          setcategoryid(response.data.categoryid)
         }).catch(error=>{
          console.error(error)
         })
        }
      
        
      }, [id])
  return (
    <div className='container'>
        <div className = 'row'>
            <div className = 'card clo-md-6 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form >
                        <div className='form-group mb-2'>
                            <div className='form-group mb-2'>
                            <label className='form-label'>Category Name :</label><br/>
                            <input type="text"
                                   placeholder='Enter category Id ' 
                                   name='categoryname' 
                                   value={categoryname} 
                                   onChange={(e)=>setcategoryname(e.target.value)}
                            />
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-label'>Category Id :</label><br/>
                            <input type="text"
                                   placeholder='Enter category Id ' 
                                   name='categoryid' 
                                   value={categoryid} 
                                   onChange={(e)=>setcategoryid(e.target.value)}
                            />
                            </div>
                    
                            <button className='btn btn-primary mb-2' onClick={(e)=>saveOrUpdateCategory(e)}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CategoryComponent