import React, {useState} from 'react';
import { BookingRoom } from '../components/booking/bookingRoom';
import { Header } from '../components/layout/header/header';
import { Theme } from '../components/theme/theme';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import { Info } from './info';
import { ThemeList } from './themeList';
import { Footer } from '../components/layout/footer/footer';

export const Main = () => {
    const [bookingMode, setBookingMode] = useState(true);

    const onClickBooking = () => {
        setBookingMode(true);
    }

    const onClickInfo = () => {
        setBookingMode(false);
    }

    return (
        <div className="bg-main pt-10 min-h-screen text-primary">
            <div className="max-w-3xl mx-auto">
                {bookingMode ? (
                    <div className="mx-auto w-full px-4 flex py-8">
                        <button className="rounded-md py-3 px-10 w-1/2 bg-booking text-black" onClick={onClickBooking}>예약</button>
                        <button className="rounded-md py-3 px-10 w-1/2 bg-theme" onClick={onClickInfo}>안내</button>
                    </div>
                ): (
                    <div className="mx-auto w-full px-4 flex py-8">
                        <button className="rounded-md py-3 px-10 w-1/2 bg-theme" onClick={onClickBooking}>예약</button>
                        <button className="rounded-md py-3 px-10 w-1/2 bg-booking text-black" onClick={onClickInfo}>안내</button>
                    </div>
                )}
            </div>

            <div className="px-4 max-w-5xl mx-auto">
                {bookingMode ? (
                    <ThemeList/>
                ) : (
                    <Info/>
                )}
            </div>
            <Footer/>
        </div>
    )
}


