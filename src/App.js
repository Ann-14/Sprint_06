import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Escena } from "./components/escena/Escena";

function App() {
  const heroStory = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      id:'1',
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      id:'2',
    },
    { text: "L'heroi va decidir travessar la porta que el portava a casa" ,
      id:'3',
    },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      id:'4',
    },
  ];
  const [counter, setCounter] = useState(1)

  const movePrevious = () =>{
setCounter(counter -1)
console.log(counter)

  }
  const moveNext = () =>{
    setCounter(counter +1)
    console.log(counter)
  }

  return (
    <>
    <Button textBtn={'Anterior'} handleClick={movePrevious}/>
    <Button textBtn={'Següent'} handleClick={moveNext}/>
    
    
    {
      heroStory.map((elem) =>(
      <Escena key={elem.id}
      text={elem.text} />
      ))}
   
   </>

  )
}

export default App;
