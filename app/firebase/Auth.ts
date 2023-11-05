import {GoogleAuthProvider , signInWithPopup , getAuth} from 'firebase/auth'
import firebase_app from './config'

const auth = getAuth(firebase_app);



export async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        provider.addScope('profile');
        provider.addScope('email');

        try {
                await signInWithPopup(auth, provider);
        } catch (error) {
                console.error("Error signing in with Google", error);
        }
}

export async function signOut() {
        
        try {
                return auth.signOut();
        } catch (error) {
                console.error("Error signing out with Google", error);
        }
}