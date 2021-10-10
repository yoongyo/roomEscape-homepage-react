import React from 'react';
import { BookingRoom } from '../booking/bookingRoom';
import exampleImg from '../../img/mos.jpg';
import { BookingButton } from '../booking/bookingButton';


export const Theme = () => {
    return (
        <div>
            <div className="rounded-2xl bg-gray-600 p-5 mb-5 border-4 border-gray-700 hover:border-yellow-300 md:grid grid-cols-3">
                <button className="relative mb-4 md:col-span-1">
                    <img className="rounded-2xl" src={exampleImg}/>
                    <div className="absolute bottom-0 bg-black bg-opacity-80 w-full text-center rounded-b-2xl p-2">
                        <p className="text-white">몬스터하우스</p>
                    </div>
                </button>
                <div className="md:col-span-2 my-auto px-8">
                    <div className="px-4 text-xl mb-8 md:px-0">
                        <p className="text-blue-400 font-bold mb-2">#잠입 #범죄 #액션</p>
                        <div className="flex flex-row">
                            <p>난이도: **** </p>
                            <p>2~4명</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                        <BookingButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}