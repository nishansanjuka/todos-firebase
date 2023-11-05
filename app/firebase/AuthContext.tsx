"use client";

import React, { useContext, useState , createContext, useEffect} from 'react';
import {onAuthStateChanged,getAuth,} from 'firebase/auth';

import firebase_app from './config';
import LoadingUI from '@/components/LoadingUI';

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext:any = () => useContext(AuthContext);

type Props = {
    children:any
}

export const AuthContextProvider = ({
    children,
}:Props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user as any);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <LoadingUI/> : children}
        </AuthContext.Provider>
    );
};