import React from 'react';
import ReactModal from 'react-modal';


export const StoryModal = ({modal, modalClick, description}:any) => {
    return (
        <ReactModal
            isOpen={modal}
            contentLabel="story"
            style={modalStyles}
        >
            <div className="px-4 py-4">
                <p className="text-white">테마 스토리</p>
            </div>
            <div className="px-4 py-3 border-t border-white flex">
                <p className="text-white py-10">{description}</p>
            </div>
        </ReactModal>
    )
}


const modalStyles = {
    content: {
        maxWidth: '640px',
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