import React from 'react';
import ReactModal from 'react-modal';


export const BookingModal = ({modal, modalClick}:any) => {
    return (
        <ReactModal 
            isOpen={modal}
            contentLabel="Booking"
            style={modalStyles}
        >
            <div className="px-8 text-white">
                <div className="flex flex-row py-6">
                    <p className="mr-6">몬스터하우스</p>
                    <p>11:40</p>
                </div>
                <div className="flex flex-row py-2 h-12">
                    <div className=" whitespace-nowrap w-2/4 my-auto">
                        예약자
                    </div>
                    <input className="w-full rounded-md text-black"/>
                </div>
                <div className="flex flex-row py-2 h-12">
                    <div className="whitespace-nowrap w-2/4 my-auto">
                        예약자
                    </div>
                    <input className="w-full rounded-md text-black"/>
                </div>
                <div className="flex flex-row py-2 h-12">
                    <div className="whitespace-nowrap w-2/4 my-auto">
                        메모
                    </div>
                    <input className="w-full rounded-md text-black"/>
                </div>
                <div className="text-booking py-6">
                    <p>* 취소나 변경 희망시 매장으로 연락주시면 감사드리겠습니다.</p>
                </div>
            </div>
            <div className="px-4 py-3 border-t border-white flex justify-end">
                <button className="bg-booking rounded-md py-2 w-24 mr-3">예약</button>
                <button className="bg-cancel rounded-md py-2 w-24" onClick={modalClick}>닫기</button>
            </div>
            
        </ReactModal>
    )
}

const modalStyles = {
    content: {
        maxWidth: '400px',
        width: '96%',
        backgroundColor: '#1b1b1b',
        top: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        paddingTop: 0,
        paddingBottom: 0,
        padding: 0,
    },
}