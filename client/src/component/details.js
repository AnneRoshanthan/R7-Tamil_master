import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../component/GlobelState'


function Details() {

    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.ProductsAPI.products
    const addCart = state.userAPI.addCart
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        if (params.id) {
            products.forEach(product => {
                if (product._id === params.id) setProductDetail(product)

            });
        }
    }, [params.id, products])

    if (productDetail.length === 0) return null

    // console.log(productDetail)



    return (
        <div>
                        <div class="container" style={{ marginTop: "100px", marginBottom: "100px", backgroundColor: "#002147", paddingTop: "50px", paddingBottom: "50px", borderRadius: "50px" }}>
                <div class="row">

                    <div class="col-6">
                        <img src={productDetail.images.url} alt="" className="card-img-top" height="600px" />
                    </div>

                    <div class="col-6" style={{ marginTop: "200px" }}>
                    <h3 className="" style={{ color: "white", textTransform: "capitalize", top: "-180px", right: "210px",color: "#ffc107" , border: "5px solid white", paddingLeft: "50px", paddingRight: "50px",paddingTop: "10px",paddingBottom: "10px", textTransform: "uppercase" }}>{productDetail.title}</h3>
                        <h6 className="mb-5" style={{ color: "white" }}> <span style={{ color: "#ffc107" }}>விலை <i class="fa fa-arrow-right" style={{ marginLeft: "25px" }} aria-hidden="true"></i> </span>    ${productDetail.price}</h6>
                        <p className="mb-5" style={{ color: "white" }}><span style={{ color: "#ffc107" }}>விளக்கம் <i class="fa fa-arrow-right" style={{ marginLeft: "5px" }} aria-hidden="true"></i> </span>{productDetail.content}</p>
                        <p className="" style={{ color: "white" }}><span style={{ color: "#ffc107" }}>விற்பனை அளவு  <i class="fa fa-arrow-right" style={{ marginLeft: "5px" }} aria-hidden="true"></i> </span>Sold:{productDetail.sold}</p>
                        
                        <Link to="#!">
                            <button type="button" className="btn btn-block btn-warning mt-5" onClick={() => addCart(productDetail)}>Add to shop</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Details