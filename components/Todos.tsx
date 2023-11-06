

import {useEffect , useState} from 'react'
import { User } from "firebase/auth"
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { DeleteTodo, FinishTodo, db } from '@/app/firebase/Todos'
import {AiOutlineDelete} from 'react-icons/ai'
import { DateTime } from 'luxon'
import SkeletonTodo from './SkeletonTodo'

type Props = {
    user:User
}
export default function Todos({user}:Props) {

    const [TodoItems, setTodoItems] = useState<todoItem[] | null>(null)

    const [Load, setLoad] = useState(false);

    const compareCreatedAt = (a:any, b:any) => {
        const dateA:any = DateTime.fromMillis(a.todo.createdAt.toMillis());
        const dateB:any = DateTime.fromMillis(b.todo.createdAt.toMillis());
        return dateA - dateB;
    };

    useEffect(() => {
        if(user) {
            setLoad(true);
            const q = query(collection(db,user.uid));
            
            const unsubscribe = onSnapshot(q , (QuerySnapshot) => {    
                let Todos:todoItem[] = [];
                QuerySnapshot.forEach((doc) => {
                    Todos.push({...doc.data() as todoItem , id:doc.id})
                })
                Todos.sort(compareCreatedAt);
                setLoad(false);
                setTodoItems(Todos);
            })
            return () => {
                unsubscribe();
            }
        }

    }, [user])

    const HandleFinish = async (event:any) => {
        event.target.classList.add("animate-pulse");
        const id = event.target.id;
        await FinishTodo(user , id , {finished:event.target.checked , finishedAt:new Date() } as todo);
        event.target.classList.remove("animate-pulse");
    }

    const HandleDelete = async (event:any) => {
        event.target.parentElement.classList.add('animate-pulse');
        const id = event.target.parentElement.id.split(',')[1];
        await DeleteTodo(user , id);
        event.target.parentElement.classList.remove('animate-pulse');
    }

  return (
    <div className='text-black mt-20 w-[80%] mx-auto'>
        <h1 className='text-3xl underline mb-10'>Todos,</h1>

        {Load && <SkeletonTodo cards={4}/>}

        {TodoItems?.map(({id , todo:{todo , createdAt } , updates}:todoItem , index:number) => {
            return (
                <div key={id} className={`flex flex-col text-sm sm:text-md relative items-center p-5 my-10  drop-shadow-xl ${updates?.finished ? "bg-red-50" : "bg-green-50"}`}>
                    <div className='flex items-center w-full'>
                        <h1 className={`flex-1 text-md  sm:text-2xl ${updates?.finished ? "line-through text-red-400 font-bold" : "text-black bg-green-50"}`}>{index + 1} . {todo} </h1>
                        <div className='flex items-center space-x-5'>
                            <div className="inline-flex items-center text-sm">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor={id}
                                    data-ripple-dark="true"
                                >
                                    <input
                                    defaultChecked={updates?.finished}
                                    onChange={HandleFinish}
                                    id={id}
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-400 checked:bg-red-400 checked:before:bg-red-400 hover:before:opacity-10"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    </div>
                                </label>
                                <label
                                    className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                    htmlFor={id}
                                >
                                    Done
                                </label>
                            </div>
                            <button id={`del,${id}`} onClick={HandleDelete} className='scale-100 transition duration-300 hover:scale-110 hover:text-red-500'><AiOutlineDelete/></button>
                        </div>
                    </div>

                   <div className=' text-[8pt] sm:text-xs w-full flex justify-between relative top-4'>
                    <p className=' text-stone-600'>{"created :" + DateTime.fromMillis(createdAt.toMillis()).toFormat("cccc, LL dd, yyyy 'at' hh:mma")}</p>
                        
                        <p className=' text-stone-600'>{updates?.finished && "finished at :" + DateTime.fromMillis(updates?.finishedAt.toMillis()).toFormat("cccc, LL dd, yyyy 'at' hh:mma")}</p>
                   </div>
                </div>
            )
            
        })}

        {TodoItems?.length === 0 && <p className='text-stone-600 text-lg text-center border-b underline pb-10'>Lets Create Some Todos</p>}
    </div>
  )
}
