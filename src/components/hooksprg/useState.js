import { useState } from "react"

export function Change(){
    const[count,setCount]=useState(0)
    const[color,setColor]=useState(['Red',"Blue","Orange"])
    return(
            <>
            <h1>{count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>Add</button>
            <button type="button" onClick={()=>setCount(count-1)}>Subb</button>
            <h1>{color}</h1>
            <button type="button" onClick={()=>setColor("Red")}>Change</button>
            </>
    )
}