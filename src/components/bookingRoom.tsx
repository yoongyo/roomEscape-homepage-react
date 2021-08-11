import React from 'react';
import exampleImg from '../img/mos.jpg';


export const BookingRoom = () => {
    return (
        <div>
        <div className="rounded-2xl bg-gray-700 p-5 mb-5 border-4 border-gray-700 hover:border-yellow-300">
            <button className="relative mb-4">
                <img className="rounded-2xl" src={exampleImg}/>
                <div className="absolute bottom-0 bg-black bg-opacity-80 w-full text-center rounded-b-2xl p-2">
                    <h1 className="text-white">몬스터 하우스</h1>
                </div>
            </button>
            <div className="grid grid-cols-2 gap-4">
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
            </div>
        </div>
        <div className="rounded-2xl bg-gray-700 p-5 mb-5">
            <img src={exampleImg}/>
            <h1 className="">해리포터</h1>
            <div className="grid grid-cols-2 gap-4">
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
            </div>
        </div>
        <div className="rounded-2xl bg-gray-700 p-5 mb-5">
            <img src={exampleImg}/>
            <h1 className="">해리포터</h1>
            <div className="grid grid-cols-2 gap-4">
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
                <button className="border rounded-3xl p-2 text-center">11:20<br/>예약 가능</button>
            </div>
        </div>
        </div>
    )
}