import React,{useState} from "react"
import "./style.css"

const App=()=>{
    let [score,setScore]=useState(0)

    return(
        <div>
            <h1>Hello this is my counter application app </h1>
            <h2> The value of score is {score} </h2>
            <button id="B1" onClick={()=>(score<25) ? setScore(score+1) : ""}> Increment </button>
            <button id="B2" onClick={()=>(score>0) ? setScore(score-1) : ""}> Decrement </button>
            <button id="B3" onClick={()=>{setScore(0)}}> Reset </button>
        </div>
    )
}

export default App