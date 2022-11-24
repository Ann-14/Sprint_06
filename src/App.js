import { useState } from "react";

import "./App.css";
import { Button } from "./components/Button";
import { Escena } from "./components/escena/Escena";
import { Welcome } from "./components/escena/Welcome";

function App() {
  const heroStory = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      id: 1,
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      id: 2,
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa",
      id: 3,
    },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      id: 4,
      img: '4.jpg'
    },
  ];
  const [counter, setCounter] = useState(1)

  const moveBack = () => {
     counter <= 1 ? setCounter(4):setCounter(counter - 1)
  }

  const moveNext = () => {
     counter >= 4 ? setCounter(1) : setCounter(counter + 1)
  }

  const [welcomeMessage, setwelcomeMessage] = useState(true)

  const changeWelcomeState = (dataFromChild) =>{
    setwelcomeMessage(dataFromChild)
  }
  
 

  if(welcomeMessage === true){
    
    


return (
  <>
  <Welcome handleStart={changeWelcomeState}></Welcome>
  </>
)


  }


else {
  return (
    <>
      <Button textBtn={'Anterior'} handleClick={moveBack} />
      <Button textBtn={'Següent'} handleClick={moveNext} />

      {
        <Escena heroStory={heroStory} counter={counter} idStory={heroStory.id} />
      }
    </>

  )
}
}

export default App;
