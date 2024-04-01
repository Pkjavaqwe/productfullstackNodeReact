import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteProduct, getAllProduct } from '../service/ProductService'
import { useState, useEffect } from 'react'
import axios from 'axios'
const ListProduct = () => {

    const [products, setproducts] = useState([])
    // var count = 2
    let [page, setpage] = useState(1)
    
    // const BASE_REST_API_URL = 'http://localhost:7000/api/product'

   
    const navigate = useNavigate()
    // const getAllProduct = (page) => axios.get(BASE_REST_API_URL+"/?page="+2);
    useEffect(() => {
       
         fetchProducts()
    },[])
    const fetchProducts = async()=>{
        const response = await fetch(`/api/product/?page=${page}`)
        const json = await response.json()
        // const allEntries = JSON.stringify(json)
        console.log(json)
 
        if(response.ok){
            console.log('response is ok')
            setproducts(json.show)
        }
        console.log(products)
     }
    
    // function listProduct (){
        
    //     getAllProduct().then((response)=>{
    //         const json =response.json()
    //         setproducts(json);
    //         console.log(products)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }
   
    
    const removeProduct=(id)=>{
        deleteProduct(id).then((response)=>{
            fetchProducts()
        }).catch(error=>{
            console.log(error)
        })

    }
    const updateProduct=(id)=>{
        navigate(`/update-product/${id}`)
    }

    const addNewProduct = ()=>{
           navigate('/add-product')//route to productComponent

    }

    const PageCountup = () =>{
        setpage(++page)
        fetchProducts()
       

    }
    const PageCountDown = () => {
        setpage(--page)
        fetchProducts()
    }
  return (
    
    <div className='container'>
        
     <h2 className='text-center'>List Of Products</h2> 
     <button className='btn btn-primary mb-2' onClick={addNewProduct}>Add Product</button>
     <button className='btn btn-primary mb-2' onClick={PageCountup}>Next</button>
     <button className='btn btn-primary mb-2' onClick={PageCountDown}>previous</button>
     
     <div>
        <table className='table table-bordered table-striped'>
        
            <thead>
                <tr>
                    <th>ProductName</th>
                    <th>ProductId</th>
                    <th>CategoryName</th>
                    <th>CategoryId</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => 

                        <tr key = {product.id}>
                            <td>{product.productname}</td>
                            <td>{product.productid}</td>
                            <td>{product.categoryname}</td>
                            <td>{product.categoryid}</td>  
                            <td>
                                <button className='btn btn-info' onClick={()=>updateProduct(product.id)}>Update Product</button>
                                <button className='btn btn-danger' onClick={()=>removeProduct(product.id)} style={{ marginLeft : "10px"}}>Delete product</button>
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

export default ListProduct