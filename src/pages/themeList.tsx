import React, {useState} from 'react';
import { BookingInfoModal } from '../components/modal/bookingInfoModal';
import { Theme } from '../components/theme/theme';


export const ThemeList = () => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);        
    }

    return ( 
        <div>
            <div className="flex flex-row justify-between py-10">
                <p className="text-white text-lg my-auto">운영중인 테마 (4)</p>
                <button className="border-booking border rounded-3xl px-8 py-2 text-booking" onClick={modalClick}>예약조회</button>
                <BookingInfoModal modal={modal} modalClick={modalClick}/>
            </div>
            <Theme/>
            <Theme/>
            <Theme/>
            <Theme/>
        </div>
    )
}