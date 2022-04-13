import React from 'react';
import MyChart from '../MyChart/MyChart';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-5'>
                <h2 className='text-center'>Recharts of Sell and Investment vs Revenue</h2>
            </div>
            <MyChart></MyChart>
        </div>
    );
};

export default Dashboard;