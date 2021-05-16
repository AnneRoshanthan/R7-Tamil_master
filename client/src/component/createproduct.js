import{ useContext, useState,useEffect } from 'react'
import {GlobalState} from '../component/GlobelState'
import axios from 'axios'
import{useHistory,useParams} from 'react-router-dom'
import Loading from '../loader/loader'  
import '../css/createBook.css'

const initialState = {
    product_id:'',
    title:'',
    price:'',
    description:'',
    content:'',
    category:'',
    _id:''

}

function Categoriess(){
    const state = useContext(GlobalState)
    const [categories] = state.createBookAPI.categories
    const [category,setCategory] = useState('')
    const [token] = state.token
    const [callback,setCallback] = state.createBookAPI.callback
    const [onEdit,setOnEdit] = useState(false)
    const [id,setID] = useState('')

    const [product,setProduct] = useState(initialState)
    const [images,setImages] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [onEditt,setOnEditt] = useState(false)
    const param = useParams()
    const[products] = state.ProductsAPI.products

    const history = useHistory()
    const [loading,setLoading] = useState(false)
    const [calback,setCalback] = state.ProductsAPI.calback

   
    useEffect(()=>{
        if(param.id){
            setOnEdit(true)
            products.forEach(product =>{
                if(product._id === param.id){
                setProduct(product)
                setImages(product.images)
                }
            })
            
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    },[param.id,products])



    const Upload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) 
            return alert("You're not an admin")
            const file = e.target.files[0]
            
            if(!file) return alert("file not found")

            if(file.size >1024*1024) return alert("Size is to large")

            if(file.type !=='image/jpeg' && file.type !== 'image/png') return alert("Incorrect file format")


            let formData = new FormData()
            formData.append('file',file)

            setLoading(true)
            const res = await axios.post('/api/upload',formData,{
                headers:{'content-type':'multipart/form-data',Authorization:token}
            })
            setLoading(false)
           setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const ChangeInput = e =>{
        const {name,value} = e.target
        setProduct({...product,[name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You are not an Amin")
            if(!images) return alert("No image Upload")

            if(onEdit){

            await axios.put(`/api/products/${product._id}`,{...product,images},{
                headers:{Authorization:token}
            })

            }else{

            await axios.post('/api/products',{...product,images},{
                headers:{Authorization:token}
            })

            }
            setCalback(!calback)
            history.push("/")
            window.location.href="/books";

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const Destroy = async () =>{
        try {
            if(!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy',{public_id: images.public_id},{
                headers:{Authorization:token}
            })
            setLoading(false)
            setImages(false)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const Style={
        display: images ? "block" : "none"
    }

    return(
        <div>
         
         
<br />


<div className="container" style={{boxShadow:"0px"}}>
<div className="border">
<h2 className=" center">Create a Book </h2>
<br />
<div className="create">

    <div className="upload">
    <input type="file" name="file" onChange={Upload} id="file"></input>
  {
      loading ? <div id="img"> <Loading style="load"/> </div>
      :<div id="img" style={Style}>
      <img src={images ? images.url : ''} alt=""></img>
      <button className="btn" onClick={Destroy}>X</button>
      </div>
  
  }
   </div>

</div> 

 <div className="my-3">
    

<form onSubmit={handleSubmit} id="formm" className="formm">
 
    <label htmlFor="produoct_id">ID:- </label>
    <input type="text" name="product_id" required value={product.product_id} onChange = {ChangeInput} disabled={onEdit}/>  

    <label htmlFor="title" id='One'>Title:- </label>
    <input type="text" name="title" required value={product.title} onChange = {ChangeInput}/>  


    <label htmlFor="price">Price:- </label>
    <input type="number" name="price" required value={product.price} onChange = {ChangeInput}/>  

    <label htmlFor="description">Description:- </label>
    <textarea type="text" name="description" required value={product.description}  rows="3" onChange = {ChangeInput}/>  

    <label htmlFor="content">Content:- </label>
    <textarea type="text" name="content" required value={product.content} rows="3" onChange = {ChangeInput}/>  <br />
    
    {/* <label htmlFor="category">Category:- </label> */}
    <br />
<div id="category">
    <select name="category" value={product.category} onChange = {ChangeInput}>
        <option value=""> Select Category </option>
        {
            categories.map(category =>(
                <option value={category._id} key={category._id}>
                    {category.name}
                </option>
            ))
        }
    </select>
    </div>
     <br /> <br />
     <div className="updatebtn">
<button className="btn btn-dark"style={{marginLeft:"250px" ,paddingLeft:"100px", paddingRight:"100px"}} type="submit">{onEdit ? "Update" : "Create"}</button>
</div>
</form>


</div>

</div> 
</div>



<br />


        </div>
    )
}

export default Categoriess