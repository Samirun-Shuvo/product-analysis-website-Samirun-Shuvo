import React from 'react';
import Navbar from '../Navbar/Navbar';
import laptop from '../../Images/laptop.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='showcase'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='mt-5 pt-5'>Laptop Shop</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum.</p>
                            <button>Shop Now</button>
                        </div>
                        <div className="col-md-6">
                            <img width={600} src={laptop} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;