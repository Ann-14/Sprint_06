
import { useState } from "react"
import { EscenaItem } from "./EscenaItem"
import { Card } from "./StyledEscena"


export const Escena = (props) => {
  
  const [counter, setCounter] = useState(0)
    useState()
    
  return (
    <>
  <button onClick={() => setCounter(counter + 1)}>Siguiente</button>
    <button onClick={() => setCounter(counter - 1)}>Anterior</button>
    {props.items.map((element, i) =>(
      
      <EscenaItem
      key={i}
      text={element.text}
      />
      
    ))}
    
    </>
  )

    }