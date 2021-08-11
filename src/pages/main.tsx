import React from 'react';
import { BookingRoom } from '../components/bookingRoom';
import { Header } from '../components/header';



export const Main = () => {
    return (
        <div className="container px-4">
            <Header/>
            <BookingRoom/>
        </div>
    )
}


