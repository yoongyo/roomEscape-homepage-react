import React from 'react';
import {Location} from '../components/map/location';


export const Info = () => {
    return (
        <div>
            <div className="flex flex-row justify-between py-10">
                <p className="text-lg my-auto text-booking">무비이스케이프 안내사항</p>
                <button className="border rounded-3xl px-8 py-2 border-gray-400">전화걸기</button>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">공지사항</p>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">가격 안내</p>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">할인 이벤트 공지</p>
            </div>

            <div className="w-full bg-theme rounded-3xl p-6 mb-8">
                <p className="text-lg">연락: 070-0909-0909</p>
                <p className="text-lg">주소: 서울시 하하하하하하</p>
            </div>
            <div className="w-full bg-theme rounded-3xl">
                <Location/>
            </div>
        </div>
    )
}