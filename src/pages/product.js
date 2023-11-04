
import React, { Fragment } from 'react';
import '../style/product.css'
import { Link } from 'react-router-dom';


const Product  = () => {

    const [products, setProducts]  = React.useState([])


    React.useEffect(() => {
        fetch("/api/product")
        .then((resp) => resp.json())
        .then((data) => setProducts(data.products))
    }, [])
 
  
  
    const productElement = products.map( it => {
        
        return(
        <div key={it.id} className='product-tile'>
            <Link to={`/products/${it.id}`}>
                <img alt={it.name}
                    src={require(`../asset/images/carousel/${it.imageUrl[0]}.png`)} />
                <div className='product-info'>
                    <h3>{it.name}</h3>
                    <p>${it.price}</p>
                </div>
                <i className={`product-type ${it.type} selected`}>{it.type}</i>
            </Link>
        </div>

    )})

    return (
    <Fragment>
        <div className="product-list-container">
            <h1>Explore our products</h1>
            {
            products.length !== 0 &&(
            <div className="product-list">
                {productElement}
            </div>
            ) || products.length === 0 && (<h2>Loading...</h2>)}
        </div>
    </Fragment>
  );
}

export default Product;
