"use client";

import React, { useEffect, useState } from 'react'
import {useAuthContext} from './firebase/AuthContext'
import { signInWithGoogle, signOut } from './firebase/Auth';
import { User } from 'firebase/auth';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/Todos';

import {useRouter} from 'next/navigation'


export default function page() {
  const {user}:UserData = useAuthContext();

  const router = useRouter();
  
 
  useEffect(() => {

    if(user) {
      const q = query(collection(db,"todos"));
      const unsubscribe = onSnapshot(q , (QuerySnapshot) => {
        
        let Todos:todo[] = [];

        QuerySnapshot.forEach((doc) => {
          Todos.push({...doc.data() as todo , id:doc.id})
        })
        console.log({Todos})
      })

      return () => {
        unsubscribe();
      }
    }
    else
    {
      router.replace("/sign-up");
    }
  }, [user])
  



  return (
    <main className='w-full h-screen flex text-black justify-center items-center flex-col space-y-4'>
    </main>
  )
}
