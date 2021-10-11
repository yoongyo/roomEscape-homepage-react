import React from 'react';
import { BookingRoom } from '../booking/bookingRoom';
import exampleImg from '../../img/mos.jpg';
import { BookingButton } from '../booking/bookingButton';


export const Theme = () => {
    return (
        <div className="mb-8">
            <div className="rounded-2xl p-5 mb-5 border-2 bg-theme border-theme hover:border-booking md:grid grid-cols-3">
                <div className="md:col-span-1 md:h-pc">
                    <button className="relative w-full">
                        <img className="rounded-2xl h-mo w-full md:h-pc" src={exampleImg}/>
                        <div className="absolute bottom-0 bg-black bg-opacity-80 text-center rounded-b-2xl w-full p-2">
                            <p className="text-white">몬스터하우스</p>
                        </div>
                    </button>
                </div>
                <div className="md:col-span-2 md:px-8 md:h-pc">
                    <div className="px-4 text-xl mb-7 md:px-0 text-white">
                        <p className="text-blue-400 font-bold mb-2">#잠입 #범죄 #액션</p>
                        <div className="flex flex-row">
                            <p>난이도: **** </p>
                            <p>2~4명</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
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