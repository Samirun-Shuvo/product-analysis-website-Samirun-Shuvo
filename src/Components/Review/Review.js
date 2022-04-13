import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { productsReviewData } from '../../data';
import ProductDetails from '../ProductDetails/ProductDetails';

const Review = () => {
  const [products, setProduct] = useState(productsReviewData);
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
        <div className='product-review-container mt-5'>
          {
            products.map(product => <ProductDetails
              key={product.id}
              product={product}
            ></ProductDetails>)
          }
        </div>
      </div>
    </div>
  );
};

export default Review;