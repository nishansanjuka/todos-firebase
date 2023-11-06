"use client";

import { useState } from 'react'
import { AddTodo } from '@/app/firebase/Todos';
import {useForm , SubmitHandler } from 'react-hook-form'
import {DateTime} from 'luxon'
import { User } from 'firebase/auth';

type Props = {
    user:User
}

export default function FormCreate({user}:Props) {
    const [Load, setLoad] = useState(false);
 
    const {register , handleSubmit , reset ,  formState:{errors}} = useForm<todo>();

    const HandleSubmit:SubmitHandler<todo> = async (FormData) => {
        setLoad(true);
        FormData.createdAt = new Date();
        await AddTodo(FormData ,  user);
        setLoad(false);
        reset();
    }

    if(user){
        return (
            <form onSubmit={handleSubmit(HandleSubmit)} className={` mt-36 w-[90%] sm:w-1/2 xl:w-1/3 bg-black drop-shadow-xl p-3 mx-auto flex items-center space-x-4 rounded ${Load && "animate-pulse"}`}>
                <input {...register('todo' , {required:true})} type="text" className={`outline-none bg-black pr-5  placeholder:font-semibold border-b ${errors.todo ? "placeholder:text-red-500 border-b-red-500" : "placeholder:text-stone-100  border-b-stone-200"} text-sm flex-1 transition duration-300`} placeholder='Create New Todo' />
                <button className='p-1 px-3  rounded-sm transition hover:bg-white hover:text-black duration-300 uppercase disabled:text-stone-700 disabled:hover:bg-transparent' disabled={!!errors.todo || !!Load}>Create</button>
            </form>
        )
    }
}
