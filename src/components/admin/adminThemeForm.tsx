import React, {useState} from 'react';
import TimePicker from '@mui/lab/TimePicker';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


interface IFormValues  {
    name: String;
    tag: String;
    time1: String;
    time2: String;
    time3: String;
    time4: String;
    time5: String;
    time6: String;
    time7: String;
    time8: String;
    time9: String;
    time10: String;
    time11: String;
    time12: String;
    runningTime: number;
    difficulty: number;
    minHeadcount: number;
    maxHeadcount: number;
    description: String;
}

type InputProps = {
    label: Path<IFormValues>;
    labelText: string
    placeholder: string;
    register: UseFormRegister<IFormValues>;
    required: boolean;
}


const Input = ({ label, labelText, placeholder, register, required}: InputProps) => (
    <div className="flex flex-row p-3">
        <div className="w-28 my-auto text-center">
            <label className="mr-3">{labelText}</label>
        </div>
        <input className="border p-1 rounded-sm w-80" {...register(label, {required})} placeholder={placeholder}/>
    </div>
)

const NumberInput = ({ label, labelText, placeholder, register, required}: InputProps) => (
    <div className="flex flex-row p-3">
        <div className="w-28 my-auto text-center">
            <label className="mr-3">{labelText}</label>
        </div>
        <input className="border p-1 rounded-sm w-80" type="number" {...register(label, {required})} placeholder={placeholder}/>
    </div>
)


const TextField = ({ label, labelText, placeholder, register, required}: InputProps) => (
    <div className="flex flex-row p-3">
        <div className="w-28 my-auto text-center">
            <label className="mr-3">{labelText}</label>
        </div>
        <textarea className="border p-1 rounded-sm w-80" {...register(label, {required})} placeholder={placeholder}/>
    </div>
)

export const AdminThemeForm = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = () => {
        
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="name" labelText="테마 이름" register={register} required placeholder="테마명을 입력해주세요"/>
                <Input label="tag" labelText="태그" register={register} required placeholder="태그를 입력해주세요"/>
                <Input label="time1" labelText="time1" register={register} required placeholder=""/>
                <Input label="time2" labelText="time2" register={register} required placeholder=""/>
                <Input label="time3" labelText="time3" register={register} required placeholder=""/>
                <Input label="time4" labelText="time4" register={register} required placeholder=""/>
                <Input label="time5" labelText="time5" register={register} required placeholder=""/>
                <Input label="time6" labelText="time6" register={register} required placeholder=""/>
                <Input label="time7" labelText="time7" register={register} required placeholder=""/>
                <Input label="time8" labelText="time8" register={register} required placeholder=""/>
                <Input label="time9" labelText="time9" register={register} required placeholder=""/>
                <Input label="time10" labelText="time10" register={register} required placeholder=""/>
                <Input label="time11" labelText="time11" register={register} required placeholder=""/>
                <Input label="time12" labelText="time12" register={register} required placeholder=""/>
                <NumberInput label="runningTime" labelText="진행시간" register={register} required placeholder=""/>
                <NumberInput label="difficulty" labelText="난이도" register={register} required placeholder=""/>
                <NumberInput label="minHeadcount" labelText="최소 인원" register={register} required placeholder=""/>
                <NumberInput label="maxHeadcount" labelText="최대 인원" register={register} required placeholder=""/>
                <TextField label="description" labelText="설명" register={register} required placeholder=""/>
            </form>
        </div>
    )
}