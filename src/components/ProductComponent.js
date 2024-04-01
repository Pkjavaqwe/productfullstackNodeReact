import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, saveProduct, updateProduct } from '../service/ProductService'

const ProductComponent = () => {
  const navigate = useNavigate()
  const [productname, setproductname] = useState('')
  const [productid, setproductid] = useState()
  const [categoryname, setcategoryname] = useState('')
  const [categoryid, setcategoryid] = useState()
  
  const {id} = useParams()
      function saveOrUpdateProduct(e){
          e.preventDefault()
          const product = {productname,productid,categoryname,categoryid}
          console.log(product)

          if(id){
            updateProduct(id,product).then((response)=>{
              navigate('/listproduct')
            })
          }else{
            saveProduct(product).then((response)=>{
              console.log(response.data)
              navigate('/listproduct')
            }).catch(error=>{
              console.log(error)
            })
          }
      }
      function pageTitle(){
        if(id){
          return <h2 className= 'text-center'>Update Product</h2>
      }else{
          return <h2 className= 'text-center'>Add Prooduct</h2>        
      }
      }
      useEffect(() => {
        
        if(id){
         getProduct(id).then((response)=>{
          console.log(response.data)
          setproductname(response.data.productname)
          setproductid(response.data.categoryid)
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
                            <label className='form-label'>Product Name :</label><br/>
                            <input type="text" 
                                   placeholder='Enter Product Name ' 
                                   name='productname' 
                                   value={productname} 
                                   onChange={(e)=>setproductname(e.target.value)} />
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-label'>Product Id :</label><br/>
                            <input type="text"
                                   placeholder='Enter product Id ' 
                                   name='productid' 
                                   value={productid} 
                                   onChange={(e)=>setproductid(e.target.value)}
                            />
                            </div>
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
                    
                            <button className='btn btn-primary mb-2' onClick={(e)=>saveOrUpdateProduct(e)}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductComponent