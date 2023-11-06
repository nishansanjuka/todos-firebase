"use client";

import React, { useEffect, useState } from 'react'
import {useAuthContext} from './firebase/AuthContext'
import { signInWithGoogle, signOut } from './firebase/Auth';
import { User } from 'firebase/auth';
import { collection, onSnapshot, query } from 'firebase/firestore';

import {useRouter} from 'next/navigation'
import FormCreate from '@/components/FormCreate';
import Todos from '@/components/Todos';


export default function page() {

  const {user}:UserData = useAuthContext();

  const router = useRouter();

  useEffect(() => {
      
    if(!user){
      router.replace('/sign-up');
    }
  }, [user])

  if(user){
    return (
      <main className='w-full text-white'>
        <FormCreate user={user} />
        <Todos user={user}/>
      </main>
    )
  }
}
