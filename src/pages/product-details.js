import React, { useState } from "react"
import { useParams } from "react-router-dom"
import '../style/product-detail.css'

const ProductDetails = (prop) => {

    const params = useParams()
    const [product, setProduct] = useState(null)
    React.useEffect(() => {
        fetch(`/api/product/${params.id}`)
        .then((res) => res.json())
        .then(data => setProduct(data.products))
    }, [params.id])
    
    return (
        <div className="product-detail-container">
            {product ? (
                <div className="product-detail">
                    <img alt={product.name} className="w-25 h-25"
                        src={require(`../asset/images/carousel/${product.imageUrl[0]}.png`)} />
                    <i className={`product-type ${product.type} selected`}>
                        {product.type}
                    </i>
                    <h2>{product.name}</h2>
                    <p className="product-price"><span>${product.price}</span></p>
                    <p>{product.description}</p>
                    <button className="link-button">Get this product</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default ProductDetails