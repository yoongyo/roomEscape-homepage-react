import React, {useEffect, useState} from 'react';
import { BACKEND_URL, ROOMESCAPE_ID } from '../api/backendURL';
import {Location} from '../components/map/location';


export const Info = () => {
    const [roomEscape, setRoomEscape] = useState({"notice": "", "event": ""})

    useEffect(() => {
        fetch(BACKEND_URL + 'roomEscape/'+ ROOMESCAPE_ID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.data);
            setRoomEscape(json.data);
        })
    }, [])

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-row justify-between py-10">
                <p className="text-lg my-auto text-booking">무비이스케이프 안내사항</p>
                <button className="border rounded-3xl px-8 py-2 border-gray-400">전화걸기</button>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">공지사항</p>
                <p>{roomEscape.notice}</p>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">가격 안내</p>
            </div>
            {roomEscape.event &&
                <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                    <p className="text-lg">할인 이벤트 공지</p>
                    <p>{roomEscape.event}</p>
                </div>
            }

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