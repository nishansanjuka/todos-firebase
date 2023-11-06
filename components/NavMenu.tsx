"use client";

import { useAuthContext } from "@/app/firebase/AuthContext";
import { User } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import empty_user from '../public/empty.png'    
import {FaSignOutAlt} from 'react-icons/fa'
import { signOut } from "@/app/firebase/Auth";



export default function NavMenu() {

    const {user}:UserData = useAuthContext();

    const [userData, setUserData] = useState<User| null>(null);

    useEffect(() => {
      setUserData(user);
    }, [user])
    

    
    const HandleSignOut = async () => {
        await signOut();
    }
    
    if(user) {
        return (
            <div className="w-full z-10 up-down p-3 bg-white border-b fixed flex items-center top-0 left-0">
                <h1 className="font-semibold underline flex-1 text-3xl">Todo App</h1>
                <div className="mr-3 flex sm:items-center space-x-8 flex-col sm:flex-row items-end">
                    <div className="flex items-center space-x-1">
                        <Image className="w-[30px] rounded-full p-1 " src={ userData?.photoURL ? userData.photoURL : empty_user } alt="logo" width={800} height={800}/>
                        <p className="text-xs sm:text-sm">{userData?.displayName}</p>
                    </div>

                    <button onClick={HandleSignOut} className="text-xs sm:text-sm p-2 flex items-center space-x-2 font-semibold text-white bg-black rounded hover:bg-slate-50 hover:text-black transition duration-300 "><span>SignOut</span><FaSignOutAlt/></button>
                </div>
            </div>
        )
    }
}
