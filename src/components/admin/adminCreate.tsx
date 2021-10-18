import React, {useEffect} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { WysiwygEditor } from '../editor/wysiwygEditor';

type Inputs = {
    name: string,
    representative: string,
    businessNumber: string,
    address: string,
    tel: string,
    notice: string,
    event: string,
    latitude: string,
    longitude: string,

};


export const AdminCreact = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    useEffect(()=>{
        console.log(watch());
    }, [watch()])

    return (
        <div className="max-w-2xl mx-auto">
            <p className="text-center text-2xl font-bold py-6">방탈출 생성</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">방탈출 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("name")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">대표자 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("representative")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">방탈출 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("name")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">대표자 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("representative")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">방탈출 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("name")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">대표자 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("representative")} />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">방탈출 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("name")} />
                    </div>
                    <div className="flex justify-between py-6 px-3"> 
                        <label className="my-auto">대표자 이름</label>   
                        <input className="border rounded-md border-black h-9" {...register("representative")} />
                    </div>
                </div>
                <div className=""> 
                    <p className="my-auto">공지사항</p>   
                    <WysiwygEditor  register={register}/>
                    {/* <textarea className="border rounded-md border-black h-9" {...register("notice")} /> */}
                </div>
                <div className="flex justify-between py-6"> 
                    <label className="my-auto">이벤트</label>   
                    <input className="border rounded-md border-black h-9" {...register("event")} />
                </div>
                
                <div className="flex justify-end py-6">
                    <button className="bg-booking px-4 py-2 rounded-md ">생성</button>
                </div>
            </form>
        </div>
    )
}