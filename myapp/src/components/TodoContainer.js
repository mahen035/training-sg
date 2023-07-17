import { useState } from "react"
export function TodoContainer(props){

    const[color, setColor] = useState('')
    const[text, setText] = useState('')

    return (
        <div>
        <div>This is a Function Component. {props.info}</div>
        <p>My Favourite Color is: { color} </p>
        <button type="button" onClick={(event)=>setColor(event.target.innerHTML)}>RED</button>
        <button type="button" onClick={(event)=>setColor(event.target.innerHTML)}>BLUE</button>
        <button type="button" onClick={(event)=>setColor(event.target.innerHTML)}>GREEN</button><br/>
        <input type="text" onChange={(event)=>setText(event.target.value)}></input>
        <p>Input Text: {text}</p>
        

        </div>
    )
}


//Stateless components : before 2017
// hooks enable us to manage state and other lifecycle methods