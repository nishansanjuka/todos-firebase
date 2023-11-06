
import {useEffect , useState} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


type Props = {
  cards:number
}

export default function SkeletonTodo({cards}:Props) {


  const [CardsArray, setCardsArray] = useState<number[]>();;

  useEffect(() => {
    setCardsArray(Array(cards).fill(0));
  }, [cards]);
  
  return (
    <div>
      {CardsArray?.map((_:any , index:number) => {
        return(
          <div key={index} className='p-5 my-10 bg-stone-50 rounded drop-shadow-xl'>
            <span className='flex w-full justify-between'>
                <Skeleton width={200} height={20}/>
                <div className='flex items-center space-x-3'>
                    <Skeleton width={40}/>
                    <Skeleton width={20}/>
                </div>
              </span>
              <div className='flex justify-between relative top-4'>
              <Skeleton width={100} height={7}/>
              <Skeleton width={100} height={7}/>
              </div>
          </div>
        )
      })}
    </div>
  )
}
