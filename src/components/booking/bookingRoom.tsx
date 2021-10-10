import React, {useState} from 'react';
import exampleImg from '../../img/mos.jpg';
import ReactModal from 'react-modal';
import { BookingButton } from './bookingButton';



export const BookingRoom = () => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);
    }

    return (
        <div>
            <div className="rounded-2xl bg-gray-700 p-5 mb-5 border-4 border-gray-700 hover:border-yellow-300">
            <button className="relative mb-4" onClick={modalClick}>
                <img className="rounded-2xl" src={exampleImg}/>
                <div className="absolute bottom-0 bg-black bg-opacity-80 w-full text-center rounded-b-2xl p-2">
                    <h1 className="text-white">몬스터 하우스</h1>
                </div>
            </button>
            <div className="grid grid-cols-2 gap-4">
                <BookingButton/>
                <BookingButton/>
                <BookingButton/>
            </div>
            <ReactModal 
                isOpen={modal}
                contentLabel="Connect"
                style={modalStyles}
            >
                <div className="border-b px-5 py-5 text-center">
                    <h1 className="text-xl font-bold text-center">테마 스토리</h1>
                </div>
                <div className="my-12 px-3">
                    <h1>그 집 근처에만 가면 몽땅 사라져 버리고 심지어 자기 부인을 살찌워 잡아 먹는다는 소문까지... 
                        사연과 비밀이 가득한 몬스터하우스 그 곳의 비밀을 풀 수 있겠는가?
                    </h1>
                </div>
                <div className="text-center border-t">
                    <button className="my-5" onClick={modalClick}>
                        <h1>closs</h1>
                    </button>
                </div>
            </ReactModal>
        </div>
    </div>
    )
}

const modalStyles = {
    content: {
        width: '90%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        paddingTop: 0,
        paddingBottom: 0,
        padding: 0,

    },
};