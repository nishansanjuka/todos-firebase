"use client";

import Image from "next/image";
import logo from '../../public/logo.png'
import {FcGoogle} from 'react-icons/fc'
import { signInWithGoogle } from "../firebase/Auth";
import { useRouter } from "next/navigation";
import { ProgressBar } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useAuthContext } from "../firebase/AuthContext";

export default function page() {

  const {user}:UserData = useAuthContext();

  const [Load, setLoad] = useState(false)

  const router = useRouter();

  useEffect(() => {
    if(user) {
      router.replace('/');
    }
  }, [user])
  
  
  const HandleSignIn = async () => {
    setLoad(true);
    try {
      await signInWithGoogle();
      router.replace("/");
    } catch (error) {
      setLoad(false);
    }
  }
  

  return (
    <main className="w-full relative text-stone-800 h-screen flex justify-center items-center">
        <div className="sm:w-1/2 sm:relative xl:w-1/3 p-5 bg-white sm:drop-shadow-xl rounded">
            <div className="w-[70%] sm:w-1/2 mx-auto mb-10">
                <Image src={logo} alt="logo" priority={true} />
            </div>
            <h1 className="text-3xl underline">Welcome</h1>
            <p className="text-xs font-light mt-5 text-stone-700 line-clamp-3">Do you have a lot of tasks to manage, but not enough time to organize them? Do you want to stay on top of your goals and deadlines, but not sure how to prioritize them? Do you need a simple and effective way to keep track of your progress and achievements?</p>
            <button onClick={HandleSignIn} className="p-3 bg-black hover:bg-stone-600 transition duration-300 text-white mt-4 w-full rounded font-semibold flex items-center justify-center space-x-2"> <FcGoogle/> <span>Continue With Google</span></button>
            {Load && <div  className="absolute rounded flex-col top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center justify-center">
              <span className="pop-up">
              <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F8F8F9'
                barColor = '#F87171'
              />
              </span>
              <p className="pop-up text-white font-semibold">Signing In ...</p>
            </div>}
        </div>
        
    </main>
  )
}
