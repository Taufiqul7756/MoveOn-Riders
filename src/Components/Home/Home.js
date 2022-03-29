import React from 'react';
import Category from '../Categories/Category';
import '../Home/Home.css'


const Home = () => {

    const vehicleName = [
        {
            title: 'Bike',
            imgUrl: 'https://i.ibb.co/VB4JGVG/Frame.png',
            capacity: 2,
            vehicleType: 'bike',
            price: 119
        },
        {
            title: 'Car',
            imgUrl: 'https://i.ibb.co/7zCNRdY/Frame-2.png" alt="Frame-2" border="0"',
            capacity: 5,
            vehicleType: 'car',
            price: 119
        },
        {
            title: 'Bus',
            imgUrl: 'https://i.ibb.co/MSY9PnW/Frame-1.png" alt="Frame-1" border="0"',
            capacity: 20,
            vehicleType: 'bus',
            price: 119
        },
        {
            title: 'Train',
            imgUrl: 'https://i.ibb.co/vQVhNXm/Group.png" alt="Group" border="0"',
            capacity: 50,
            vehicleType: 'train',
            price: 119
        }
    ]
    
    return (
        <div className="card-container">
            {
                vehicleName.map(vehicle =><Category vehicle={vehicle} />)
            }
            
        </div>
    );
};

export default Home;