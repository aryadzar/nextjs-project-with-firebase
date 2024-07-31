"use client"

import { useState } from "react";

export default function Template({children} : {children : React.ReactNode}){
    
    const [state, setState] = useState(0);
    
    return(
        <>
        <div>
            {children}
        </div>
        </>
    )
}