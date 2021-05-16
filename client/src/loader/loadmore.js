import React, { useContext } from 'react'
import {GlobalState} from '../component/GlobelState'


function LoadMore() {
    
    const state = useContext(GlobalState)
    const [page,setPage] = state.ProductsAPI.page
    const [result] = state.ProductsAPI.result
    
    return(
            <div style={{marginLeft:"190%",marginTop:"5%"}}>

                {
                    result<page *12 ? ""
                    :<button onClick={() => setPage(page+1)} className="btn" style={{backgroundColor: "#ffc107" }}>Next</button>
                }

            </div>
    )
}

export default LoadMore