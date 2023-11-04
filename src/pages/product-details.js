import React, { useState } from "react"
import { useParams } from "react-router-dom"
import '../style/product-detail.css'
import { motion } from "framer-motion"

const ProductDetails = (prop) => {

    const params = useParams()
    const [product, setProduct] = useState(null)
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);


    React.useEffect(() => {
        fetch(`/api/product/${params.id}`)
        .then((res) => res.json())
        .then(data => setProduct(data.products))
    }, [params.id])
    


    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => {
                console.log("handleNext "+prevIndex)
                const x = (prevIndex + 1) % 3;
                return x;}
        );
        return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => {
                console.log("handleBack"+prevIndex)
                const x = (prevIndex + 2) % 3;
                return x;}
        );

        return updatedIndexes;
        });
    };

    // const images = [city1, city2, city3, planet1, planet2];

    const positions = ["center", "left", "right", ];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 2 },
        // left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-40%", scale: 0.5, zIndex: 1 },
        right: { x: "40%", scale: 0.5, zIndex: 1 },
        // right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };

   

    return (
        <div className="product-detail-container">


            
            {product ? (
                <div className="product-detail">
                    
                    <div className="flex items-center flex-col justify-center absolute-fix">
                        {product.imageUrl.map((image, index) => (
                            <motion.img
                                key={index}
                                src={require(`../asset/images/carousel/${image}.png`)}
                                alt={image}
                                className="w-90 h-90"
                                initial="center"
                                animate={positions[positionIndexes[index]]}
                                variants={imageVariants}
                                transition={{ duration: 0.8 }}
                                style={{ width: "40%"}}
                                />
                        ))}
                        <div className="flex flex-row gap-3">
                            <button
                            className="mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                            onClick={handleBack}
                            >
                            Back
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                            className="mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                            onClick={handleNext}
                            >
                            Next
                            </button>
                        </div>
                    </div>
                    
                    <i className={`product-type ${product.type} selected`}>
                        {product.type}
                    </i>
                    <h2>{product.name}</h2>
                    
                    <p>{product.description}</p>
                    <button className="link-button">Get this product</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default ProductDetails