import React, {useState} from 'react';
import { BookingRoom } from '../components/booking/bookingRoom';
import { Header } from '../components/layout/header/header';
import { Theme } from '../components/theme/theme';
import {Map, GoogleApiWrapper} from 'google-maps-react';


export const Main = () => {
    const [bookingMode, setBookingMode] = useState(true);

    const onClickBooking = () => {
        setBookingMode(true);
    }

    const onClickInfo = () => {
        setBookingMode(false);
    }

    return (
        <div className="bg-main py-10 min-h-screen text-primary">
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

            {/* 테마 리스트  */}
            <div className="px-4 max-w-5xl mx-auto">
                {bookingMode ? (
                    <div>
                        <div className="flex flex-row justify-between py-10">
                            <p className="text-white text-lg my-auto">운영중인 테마 (4)</p>
                            <button className="border-booking border rounded-3xl px-8 py-2 text-booking">예약조회</button>
                        </div>
                        <Theme/>
                        <Theme/>
                        <Theme/>
                        <Theme/>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-row justify-between py-10">
                            <p className="text-lg my-auto">공지사항</p>
                            <button className="border rounded-3xl px-8 py-2 border-gray-400">전화걸기</button>
                        </div>
                        <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                            <p className="text-lg">할인 이벤트 공지</p>
                        </div>

                        <div className="w-full bg-theme rounded-3xl p-6">
                            <p className="text-lg">연락: 070-0909-0909</p>
                            <p className="text-lg">주소: 서울시 하하하하하하</p>
                        </div>

                        <div className="w-full bg-theme rounded-3xl p-6">
                            <Map
                                google={"213"}
                                zoom={15}

                            >
                            
                            </Map>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}


