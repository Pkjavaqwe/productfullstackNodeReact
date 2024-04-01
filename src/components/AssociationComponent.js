import React, { useEffect, useState } from 'react'

const AssociationComponent = (props) => {
    const [products, setproducts] = useState([])

    useEffect(() => {
    fetchProducts()  
    },[])
    

    const fetchProducts = async()=>{
        const response = await fetch(`/api/association/?categoryid=${props.id}`)
        const json = await response.json()
        // const allEntries = JSON.stringify(json)
        console.log(json)
 
        if(response.ok){
            console.log('response is ok')
            console.log(json.data)
            setproducts(json.data.flatMap(elements=>elements.Products))
        }
        console.log(products)
     }
    
function updateProduct(id){

}

function removeProduct(id){

}

  return (
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
                            <button className='btn btn-info' onClick={()=>updateProduct(product.id)}>Update Todo</button>
                            <button className='btn btn-danger' onClick={()=>removeProduct(product.id)} style={{ marginLeft : "10px"}}>Delete Todo</button>
                        </td>                      
                    </tr>

                )

            }
            

        </tbody>
        
    </table>
 </div>



   
  )
}

export default AssociationComponent