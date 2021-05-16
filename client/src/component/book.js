import React, {useContext,useEffect, useState } from 'react'
import {GlobalState} from '../component/GlobelState'
import ProductItem from '../Items/productitem'
import '../Items/productitem.css'
import Loading from '../loader/loader'
import Filters from '../component/filter'
import LoadMore from '../loader/loadmore'
import axios from 'axios'

function Books(){
    const state = useContext(GlobalState)
    const[products,setProducts] = state.ProductsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [calback,setCalback] = state.ProductsAPI.calback       
    const [loading,setLoading] = useState(false)
    const [isCheck,setIsCheck] = useState(false)
    



    const handleCheck = (id)=>{
         products.forEach(product => {
             if(product._id === id) product.checked = !product.checked
         });
         setProducts([...products])
    }

    const deleteProduct = async(id,public_id) =>{
        console.log(id)
        try {
           
            setLoading(true)
            const destroyImg =  axios.post('/api/destroy',{public_id},{
                headers:{Authorization:token}
            }) 

            const deleteProduct =  axios.delete(`/api/products/${id}`,{
                headers:{Authorization:token}
            })

            await destroyImg
            await deleteProduct
            setCalback(!calback)
            setLoading(false)
            

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id,product.images.public_id)
        })
    }

        if(loading) return <Loading />

    return(
         <>

     
            <div>

{/* <div className="container-fluid "> */}
<div className="container-fluid bk-bg">
    <div className="my Stdyle" > {/* border */}
<br />
       {
            isAdmin && <div>
                <span style={{color:"white"}}>Select All</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} style={{marginLeft:"4px"}}/>
                <span className="glyphicon glyphicon-trash trash" onClick={deleteAll} style={{marginLeft:"8px"}}></span>
            </div>
        }
    
    
        <Filters />
    

            <div className=" top-12" >
        <h3 style={{color:"white"}}> TOP 12 <span className="animate-box" style={{color:"#ffc107",fontWeight:"bold"}}>BOOKS</span> </h3>
        
        </div>
        <br /> <br />
   <div className="pro">      
   
   
      {
            products.map(product =>{
                return <ProductItem key={product._id} product={product} 
                isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck}
                />
            })


        
        }

        <LoadMore />
</div>

<br /><br />

</div>

</div>

            </div> 
           
                    {products.length === 0 && <Loading />}
                    </>
        )
    
}
export default Books;