import { useState } from "react"

export function Change1(){
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[color,setColor]=useState(['Red',"Blue","Orange"])
    let increment=()=>{
        setCount((preCount)=>preCount+1)
    }
    let decrement=()=>{
        setCount1((preCount)=>preCount-1)
    }
    const bg1={
        width:'100%',
        height:'100vh',
        border:'100px solid orange'
    }
    return(
            <>
           <div className="container fluid" style={bg1}>
            <center><div>
                <h1 className="mt-2">Bob ate<span className="text-warning">{count}</span>mangoes<span className="text-warning">{count1}</span>Banannas</h1>
                <div className="container-fluid row">
                <div className="col-5">
                <img src="https://th.bing.com/th/id/OIP.xCpt5HJ-gJKckTP4Grqj6wHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7" style={{width:300,height:300}}></img>
                <button type="button" style={{backgroundColor:"blue", color:"white"}} onClick={()=>setCount(count+1)}>Eat Mango</button>
                </div>
                <div className="col-5">
                <img src="https://th.bing.com/th/id/OIP.5PUoT1AxbpSbGM7y0M3xdwHaHa?w=187&h=188&c=7&r=0&o=5&pid=1.7"style={{width:300,height:300}}></img>
                <button type="button"style={{backgroundColor:"blue", color:"white"}}  onClick={()=>setCount1(count+1)}>Eat Banan</button>
                </div></div>
            </div></center>
           </div>
            </>
    )
}