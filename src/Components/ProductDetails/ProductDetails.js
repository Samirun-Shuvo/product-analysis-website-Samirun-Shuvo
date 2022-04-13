import React from 'react';
import './ProductDetails.css'

const ProductDetails = (props) => {
    const { name, image, dec, ratting } = props.product;
    return (
        <div className='product-details'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{dec}</p>
            <div>
                <p><small className='text-danger'>Ratting: {ratting}</small></p>
            </div>
        </div>
    );
};

export default ProductDetails;