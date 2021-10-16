import React from 'react';
import ReactModal from 'react-modal';


export const BookingInfoModal = ({modal, modalClick}:any) => {
    return (
        <ReactModal
            isOpen={modal}
            contentLabel="BookingInfo"
            style={modalStyles}
        >
            <div className="px-8 pb-12 pt-6">
                <div className="flex flex-row py-2">
                    <div className="text-white whitespace-nowrap pr-8 py-2">예약자</div>
                    <input className="w-full rounded-md"/>
                </div>
                <div className="flex flex-row py-2">
                    <div className="text-white whitespace-nowrap pr-8 py-2">연락처</div>
                    <input className="w-full rounded-md"/>
                </div>
            </div>
            <div className="px-4 py-3 border-t border-white flex justify-end">
                <button className="bg-booking rounded-md py-2 w-24 mr-3">예약확인</button>
                <button className="bg-cancel rounded-md py-2 w-24" onClick={modalClick}>닫기</button>
            </div>
        </ReactModal>
    )
}


const modalStyles = {
    content: {
        backgroundColor: '#1b1b1b',
        top: '20%',
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