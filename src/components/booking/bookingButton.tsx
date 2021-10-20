import React, {useState} from 'react';
import ReactModal from 'react-modal';
import { BookingModal } from '../modal/bookingModal';



export const BookingButton = ({time}:any) => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);
    }


    return (
        <>
            <button className="rounded-3xl text-center py-1 md:py-2 bg-booking text-black" onClick={modalClick}>
                <p className="text-sm">{time}</p>
                <p className="text-sm">예약가능</p>
            </button>
            <BookingModal modal={modal} modalClick={modalClick}/>
        </>
    )
}

