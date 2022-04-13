import React, { useState } from 'react';
import { productsReviewData } from '../../data'
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css';

const Product = () => {
    const productData = productsReviewData.slice(0, 3);
    const [products, setProducts] = useState(productData);
    console.log(products);
    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Customers Review</h2>
            <div className='product-review-container mt-5'>
                {
                    products.map((product) => <ProductDetails
                        key={product.id}
                        product={product}
                    ></ProductDetails>)
                }
            </div>
            <div className='mt-5 text-center'>
                <a href="/review">
                    <button className='bg-info border-0 p-2'>See All Reviews</button>
                </a>
            </div>
        </div>
    );
};

export default Product;