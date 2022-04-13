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
                        <div className="col-md-6 py-3">
                            <h2 className='mt-5 pt-3'>
                                The Leading Online Computer Shop in Bangladesh
                            </h2>
                            <p>
                                If you are looking for the best computer shop in Bangladesh you have to consider Blessing-Computers, as it is a pioneer computer shop and e-commerce platform selling computer and IT products all over Bangladesh through its branches and website. It provides a fast, secure, and convenient online shopping experience with a broad product offering in categories ranging from desktop PC, laptop to office equipment, camera, and smart devices.
                            </p>
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