import { useState } from "react";

import "./App.css";
import { Button } from "./components/Button";
import { Escena } from "./components/escena/Escena";

function App() {
  const heroStory = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      id: '1',
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      id: '2',
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa",
      id: '3',
    },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      id: '4',
    },
  ];
  const [counter, setCounter] = useState(1)

  const moveBack = () => {
    setCounter(counter - 1)
    if (counter <= 0) return setCounter(4);

  }
  const moveNext = () => {
    if (counter >= heroStory.length) return setCounter(0);
    setCounter(counter + 1)

  }


  return (
    <>
      <Button textBtn={'Anterior'} handleClick={moveBack} />
      <Button textBtn={'Següent'} handleClick={moveNext} />


      {

        // heroStory.map((elem) =>(
        // <Escena key={elem.id}
        // items={heroStory}
        // idStory={elem.id}
        // text={elem.text}
        // counter={counter} />
        // ))

        // <Escena key={heroStory.id}
        // items={heroStory}
        // idStory={heroStory.id}
        // text={heroStory.text}
        // counter={counter}


        // />

        <Escena items={heroStory} counter={counter} idStory={heroStory.id} />
      }
    </>

  )
}

export default App;
