import React from 'react';
import { BookingRoom } from '../components/bookingRoom';
import { Header } from '../components/header';



export const Main = () => {
    return (
        <div className="container">
            <Header/>
            <div className="px-4">
                <BookingRoom/>
            </div>
        </div>
    )
}


