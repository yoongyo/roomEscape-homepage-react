import React, {useState} from 'react';
import ReactModal from 'react-modal';



export const BookingButton = () => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);
    }


    return (
        <>
            <button className="border rounded-3xl text-center py-1 md:py-2" onClick={modalClick}>
                <p className="text-sm">11:00</p>
                <p className="text-sm">예약가능</p>
            </button>
            <ReactModal 
                isOpen={modal}
                contentLabel="Connect"
                style={modalStyles}
            >
                <div className="p-4">
                    <h1>몬스터하우스</h1>
                    <h1>11:40</h1>
                    <table className="table-auto">

                        <tr>
                            <th className="w-1/4"></th>
                            <th className="w-3/4"></th>
                        </tr>

                        <tbody>
                            <tr>
                                <td><h1>예약자</h1></td>
                                <td><input/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-5 flex flex-row-reverse border-t">
                    <button className="bg-gray-300 px-8 py-3 rounded-lg" onClick={modalClick}>닫기</button>
                    <button className="bg-yellow-300 px-8 py-3 rounded-lg mr-2">예약</button>
                </div>
            </ReactModal>
        </>
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