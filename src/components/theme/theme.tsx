import React, {useState, useEffect} from 'react';
import { BookingRoom } from '../booking/bookingRoom';
import exampleImg from '../../img/mos.jpg';
import { BookingButton } from '../booking/bookingButton';
import { Rating } from '@mui/material';
import { StoryModal } from '../modal/storyModal';


export const Theme = ({value}:any) => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className="mb-8">
            <div className="rounded-2xl p-5 mb-5 border-2 bg-theme border-theme hover:border-booking md:grid grid-cols-3">
                <div className="md:col-span-1 md:h-pc">
                    <button className="relative w-full" onClick={modalClick}>
                        <img className="rounded-2xl h-mo w-full md:h-pc" src={exampleImg}/>
                        <div className="absolute bottom-0 bg-black bg-opacity-80 text-center rounded-b-2xl w-full p-2">
                            <p className="text-white">{value.name}</p>
                        </div>
                    </button>
                    <StoryModal modal={modal} modalClick={modalClick} description={value.description}/>
                </div>
                <div className="md:col-span-2 md:px-8 md:h-pc">
                    <div className="px-4 text-xl mb-7 md:px-0 text-white">
                        <p className="text-blue-400 font-bold mb-2">{value.tag}</p>
                        <div className="md:grid md:grid-cols-3">
                            <div className="flex flex-row">
                                <p>난이도 :</p><Rating style={{marginTop: "auto", marginBottom: "auto", marginLeft: "6px"}} value={value.difficulty} readOnly precision={0.5} size="small" max={6}/>
                            </div>
                            <p>진행시간 : {value.runningTime}분</p>
                            <p>참여인원 : {value.minHeadcount}~{value.maxHeadcount}명</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                        {value.time1 && <BookingButton time={value.time1}/>}
                        {value.time2 && <BookingButton time={value.time2}/>}
                        {value.time3 && <BookingButton time={value.time3}/>}
                        {value.time4 && <BookingButton time={value.time4}/>}
                        {value.time5 && <BookingButton time={value.time5}/>}
                        {value.time6 && <BookingButton time={value.time6}/>}
                        {value.time7 && <BookingButton time={value.time7}/>}
                        {value.time8 && <BookingButton time={value.time8}/>}
                        {value.time9 && <BookingButton time={value.time9}/>}
                        {value.time10 && <BookingButton time={value.time10}/>}
                        {value.time11 && <BookingButton time={value.time11}/>}
                        {value.time12 && <BookingButton time={value.time12}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}