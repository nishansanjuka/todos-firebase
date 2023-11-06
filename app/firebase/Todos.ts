import {getFirestore , addDoc, collection, query, onSnapshot, QuerySnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import firebase_app from './config'
import { User } from 'firebase/auth';


export const db = getFirestore(firebase_app);

export async function AddTodo(todo:todo , {uid}:User):Promise<TodoResponse> {

    try {
        await addDoc(collection(db , uid ) , {todo});
        
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


export async function FinishTodo({ uid }: User, id:string , updates:todo):Promise<TodoResponse> {
  try {
    const todoRef = doc(collection(db, uid), id); 
    await updateDoc(todoRef, {updates});
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


export async function DeleteTodo({ uid }: User, id:string):Promise<TodoResponse> {
    try 
    {
      await deleteDoc(doc(db, uid,id));
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
  