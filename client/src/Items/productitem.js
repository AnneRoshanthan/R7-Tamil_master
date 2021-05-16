// import React, { useContext } from 'react'
// import './productitem.css'
// import { Link } from 'react-router-dom'
// import { GlobalState } from '../component/GlobelState'


// function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {

//     const state = useContext(GlobalState)
//     const addCart = state.userAPI.addCart
//     // const [loading,setLoading] = useState(false)




//     // if(loading) return <Loading />


//     return (
//         <div style={{backgroundColor: "#002147", paddingTop: "30px", marginBottom:"20px"}} class="container">


//             <div className="row" style={{}}>

//                 <div className="col-12 cmy">

//                     {
//                         isAdmin && <input type="checkbox" checked={product.checked}
//                             onChange={() => handleCheck(product._id)} />
//                     }
//                     {/* <div className="card cardd">
                
//                     <img src={product.images.url} alt="" className="card-img-topp imageurl" height="280rem" />
                    
                 



//                 <div className="card-body">
//                 <h6 className="card-title cen">{product.title}</h6>
//                 <h6 className="card-text text-muted cen">${product.price}</h6>
//                 <p className="over">{product.descrikption}</p> */}
//                    <div class="container">                    <div class=" row">
//                         <div class="col-3">
//                             <div class="card" style={{width: "18rem"}}>
//                                 <img class="card-img-top" width="50%" height="400px" style={{width:"300px"}} src={product.images.url} alt="Card image cap" />
//                                 <div class="card-body">
//                                     <h5 class="card-title">{product.title}</h5>
                                    
//                                     {/* <a href="#!" class="btn btn-primary mr-5 pr-4 pl-4" onClick={() => addCart(product)}>Buy</a> */}
//                                     {/* <Link to={`/detail/${product._id}`}>
//                                         <button type="button" className="btn btn-primary my-3 right"> Details </button>
//                                     </Link> */}
//                                 </div>
//                             </div>
//                             {isAdmin ?

//                                 <div className="butt">

//                                     <Link to={`/edit/${product._id}`}>
//                                         <button type="button" className="btn btn-dark my-3 " > Edit </button>
//                                     </Link>

//                                     <Link to="#!">
//                                         <button type="button" className="btn btn-dark" onClick={() => deleteProduct(product._id, product.images.public_id)}>Delete</button>
//                                     </Link>
//                                 </div>


//                                 : <div className="butt">

//                                      <Link to={`/detail/${product._id}`}>
//                                         <button type="button" className="btn btn-dark my-3 "> Details </button>
//                                     </Link>

//                                     <Link to="#!" onClick={() => addCart(product)}>
//                                         <button type="button" className="btn btn-dark ">Buy</button>
//                                     </Link> 
//                                 </div>
//                             }
//                         </div>
//                         </div>

//                     </div>

//                 </div>

          



//             </div>

//             <br /><br />

//         </div>
    
//     )
// }

// export default ProductItem



import React,{useContext} from 'react'
import './productitem.css'
import {Link} from 'react-router-dom'
import {GlobalState} from '../component/GlobelState'


 function ProductItem({product,isAdmin,deleteProduct,handleCheck}){
     
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    // const [loading,setLoading] = useState(false)

   

   
    // if(loading) return <Loading />


     return(
         <div>
     <div style={{backgroundColonr: "#002147", marginBottom:"30px"}} >
                

<div className="row">
           
            <div className="col-11 cmy">

            {
                    isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={()=> handleCheck(product._id)} className="checkkkk"/>
                }
                <div className="card cardd">
                
                    <img src={product.images.url} alt="" className="card-img-topp imageurl" height="200rem" />
                    
                 



                <div className="card-body">
                <h6 className="card-title cen">{product.title}</h6>
                <h6 className="card-text text-muted cen">${product.price}</h6>
                {/* <p className="over">{product.description}</p> */}

{ isAdmin ?

        <div className="butt">

            <Link to={`/edit/${product._id}`}>
                <button type="button" className="btn btn-dark my-3 right"> Edit </button>
             </Link>

            <Link to="#!"> 
                <button type="button" className="btn btn-dark buy" onClick={()=>deleteProduct(product._id,product.images.public_id)}>Delete</button>
            </Link>
        </div>


        :<div className="butt">

            <Link to={`/detail/${product._id}`}>
                <button type="button" className="btn btn-dark my-3 right"> Details </button>
             </Link>

            <Link to="#!" onClick={() =>addCart(product)}> 
                <button type="button" className="btn btn-dark buy">Buy</button>
            </Link>
        </div>
 }
            </div>
            </div>
            
            </div>
    
             
                
        
    </div>


      </div>
      {/* <hr style={{border:"4px solid white"}}/> */}

      </div>

     )
 }

 export default ProductItem