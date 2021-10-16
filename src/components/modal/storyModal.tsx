import React from 'react';
import ReactModal from 'react-modal';


export const StoryModal = ({modal, modalClick}:any) => {
    return (
        <ReactModal
            isOpen={modal}
            contentLabel="story"
            style={modalStyles}
        >
            <div className="px-4 py-4">
                <p className="text-white">테마 스토리</p>
            </div>
            <div className="px-4 py-3 border-t border-white flex justify-end">
                <p className="text-white py-10">그 집 근처에만 가면 몽땅 사라져 버리고
심지어 자기 부인을 살 찌워서 잡아먹었다는 소문까지...
사연과 비밀이 가득한 몬스터 하우스.
그 곳의 비밀을 풀 수 있겠는가?</p>
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