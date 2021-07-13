import React from "react"
import "./style.css"
import Button from "./Button"

const Fruits=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Namaste React</h1>
            <h2 id="namaskar">Namaskar</h2>
            <h3>
            <p>welcome to the world of <em id="em"><strong>ReactJs</strong></em> Here we will start our 
            journy of learning from basics to advanced, and the final you will be master in <em id="em"><strong>ReactJs.</strong></em> </p>
                </h3>
            <Button ButtonText="Apple"/>
            <Button ButtonText="Banana"/>
            <Button ButtonText="Orange"/>
            <Button ButtonText="Guava"/>
            <Button ButtonText="mango"/>
        </div>
    )
}

export default Fruits