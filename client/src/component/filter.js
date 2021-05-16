import React, { useContext } from 'react'
import {GlobalState} from '../component/GlobelState'

function Filters() {

    const state = useContext(GlobalState)
    const [categories] = state.createBookAPI.categories
    const [category,setCategory] = state.ProductsAPI.category
    const [sort,setSort] = state.ProductsAPI.sort
    const [search,setSearch] = state.ProductsAPI.search
    
    const handleCategory = e =>{
        setCategory(e.target.value)
        setSearch('')
    }
    
    return(
        <div className="">






<br />













            <div  className="category">
            {/* <span>Categories   :-   </span> */}
            <select value={category} onChange={handleCategory} style={{height:"40px",border:"none",backgroundColor:"white"}} className="focus">
                <option value='' style={{height:"40px",border:"none",backgroundColor:"white"}}>All Books</option>
                {
                    categories.map(category =>(
                        <option value={"category=" + category._id} key={category._id}  >
                            {category.name}
                        </option>
                    ))
                }
            </select><br />
            {/* <h3 className=" top-12 cen"> Top 12 Books </h3> */}
</div>
                      


                <div className="search">
            <input  value={search} type="search"  className="form-control" placeholder="Search..."
                onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
            />
                </div>
<br /><br />
        </div>
    )
}

export default Filters