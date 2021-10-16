import React from 'react';



export const Info = () => {
    return (
        <div>
            <div className="flex flex-row justify-between py-10">
                <p className="text-lg my-auto">공지사항</p>
                <button className="border rounded-3xl px-8 py-2 border-gray-400">전화걸기</button>
            </div>
            <div className="w-full bg-theme rounded-3xl h-80 p-6 mb-8">
                <p className="text-lg">할인 이벤트 공지</p>
            </div>

            <div className="w-full bg-theme rounded-3xl p-6 mb-8">
                <p className="text-lg">연락: 070-0909-0909</p>
                <p className="text-lg">주소: 서울시 하하하하하하</p>
            </div>

            <div className="w-full bg-theme rounded-3xl p-6">
                {/* <Map
                    google={"213"}
                    zoom={15}

                >
                
                </Map> */}
            </div>
        </div>
    )
}