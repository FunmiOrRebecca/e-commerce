import { useState, useEffect } from 'react';



const useMountAndUnmountTransition = (isComponentMounted, unMountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
   
    useEffect(()=> {
        let timeOut;

        if(isComponentMounted && !hasTransitionedIn){
            setHasTransitionedIn(true);
        }else if(!isComponentMounted && hasTransitionedIn){
            timeOut = setTimeout(() => setHasTransitionedIn(false), unMountDelay )
        }
        return () => {
            clearTimeout(timeOut);
        }

    }, [unMountDelay, isComponentMounted, hasTransitionedIn]
    )
    return hasTransitionedIn
}


export default useMountAndUnmountTransition;