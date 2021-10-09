import React, {useState} from 'react';
import { BookingRoom } from '../components/bookingRoom';
import { Header } from '../components/header';



export const Main = () => {
    const [bookingMode, setBookingMode] = useState(true);

    return (
        <div className="container">
            {/* <Header/> */}
            <div className="mx-auto w-full px-4 flex">
                <button className="bg-yellow-400 rounded-md py-3 px-10 w-1/2">예약</button>
                <button className="bg-yellow-400 rounded-md py-3 px-10 w-1/2">안내</button>
            </div>

            <div className="px-4">
                <BookingRoom/>
            </div>
        </div>
    )
}


