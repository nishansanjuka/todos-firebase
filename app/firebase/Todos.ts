import {getFirestore , addDoc, collection, query, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import firebase_app from './config'


export const db = getFirestore(firebase_app);

export async function AddTodo(todo:todo):Promise<TodoResponse> {
    try {
        await addDoc(collection(db , "todos") , {todo});

        return {
            status:200,
            msg:"Created New Todo"
        }

    } catch (error:any) {
        return {
            status:500,
            msg:error.message
        }
    }
}