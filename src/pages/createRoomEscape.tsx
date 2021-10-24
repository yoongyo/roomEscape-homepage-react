import React, {useEffect} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { BACKEND_URL, ROOMESCAPE_ID } from '../api/backendURL';
import { WysiwygEditor } from '../components/editor/wysiwygEditor';

type Inputs = {
    name: string,
    email: string,
    representative: string,
    businessNumber: string,
    address: string,
    tel: string,
    notice: string,
    event: string,
    latitude: string,
    longitude: string,
};

export const CreateRoomEscape = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    const onClick = () => {
        fetch(BACKEND_URL + 'admin/roomEscape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(watch())
        })
        .then(res => res.json())
    }

    return (
        <div className="max-w-2xl mx-auto">
            <p className="text-center text-2xl font-bold py-6">방탈출 생성</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">방탈출 이름</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("name")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">이메일</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("email")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">대표자 이름</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("representative")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">사업자 번호</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("businessNumber")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">주소</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("address")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">전화번호</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("tel")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">지도 경도</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("latitude")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">지도 위도</label>   
                        <input className="border rounded-md border-black h-9 px-2" {...register("longitude")} />
                    </div>
                </div>
                <div className="px-3 py-6"> 
                    <p className="my-auto mb-3">공지사항</p>   
                    <WysiwygEditor  register={register}/>
                    {/* <textarea className="border rounded-md border-black h-9" {...register("notice")} /> */}
                </div>


                {/* <div className="flex justify-between py-6"> 
                    <label className="my-auto">이벤트</label>   
                    <input className="border rounded-md border-black h-9" {...register("event")} />
                </div> */}
                
                <div className="flex justify-end py-6 px-3">
                    <button className="bg-booking px-4 py-2 rounded-md" onClick={onClick}>생성</button>
                </div>
            </form>
        </div>
    )
}