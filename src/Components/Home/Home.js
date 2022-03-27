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
            imgUrl: 'https://i.ibb.co/VB4JGVG/Frame.png',
            capacity: 5,
            vehicleType: 'car',
            price: 119
        },
        {
            title: 'Bus',
            imgUrl: 'https://i.ibb.co/VB4JGVG/Frame.png',
            capacity: 20,
            vehicleType: 'bus',
            price: 119
        },
        {
            title: 'Train',
            imgUrl: 'https://i.ibb.co/VB4JGVG/Frame.png',
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