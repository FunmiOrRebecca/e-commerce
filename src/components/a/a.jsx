import { useEffect, useState } from 'react';
import Timer from '../timer/timer.component';
import './a.css';

const useMountTransition = (isMounted, unMountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
   
    useEffect(()=> {
        let timeOut;

        if(isMounted && !hasTransitionedIn){
            setHasTransitionedIn(true);
        }else if(!isMounted && hasTransitionedIn){
            timeOut = setTimeout(() => setHasTransitionedIn(false), unMountDelay )
        }
        return () => {
            clearTimeout(timeOut);
        }

    }, [unMountDelay, isMounted, hasTransitionedIn])
    return hasTransitionedIn
}



const A = () => {
    const [isMounted, setIsMounted] = useState(false);
    const hasTransitionedIn = useMountTransition(isMounted, 1000)
    const onMountHandler = () => {
        setIsMounted(!isMounted);
    }
    return(
        <div>
      
        <button onClick={onMountHandler}>{`${isMounted? 'Hide': 'Show'} Element`}</button>
        <div className='content'>
        {( hasTransitionedIn || isMounted )&& <div className={`card  ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>Card COntent</div>
    }
    </div>
        </div>
    )
}
// const A = () => {
//     const [isMounted, setIsMounted] = useState(false);
//     const onMountClick = () => {
//         setIsMounted(!isMounted)
//     }
//     return(
//         <div className='contain'>
//         <button onClick={onMountClick}>{`${isMounted ? 'Hide' : 'Show'} Element`}</button>
        
//         <div className='content'>
//         <div className={`card ${isMounted && 'visible'}`}>Card Content</div>
//         </div>
//         </div>
//     )
// }



export default A;
