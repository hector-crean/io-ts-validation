import React, {useMemo, useState} from 'react';

export const useBoolFn = (initialState = false) => {
    const [state, setState] = useState(initialState); 

    const handlers = useMemo( 
        () => ({
            setTrue: () => { setState(true) },
            setFalse: () => { setState(false) },
            toggle: () => { setState ( s => !s)},
            reset: () => { setState(initialState)},
        }), [initialState])
    
}

