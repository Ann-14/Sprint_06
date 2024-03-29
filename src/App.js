import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { HeroStory } from "./components/data/HeroStory";
import { Escena } from "./components/escena/Escena";
import { Welcome } from "./components/escena/Welcome";
import { BackgroundImg } from "./components/escena/StyledEscena";

function App() {
  const [counter, setCounter] = useState(0);

  const moveBack = () => {
    counter <= 0 ? setCounter(3) : setCounter(counter - 1);
  };

  const moveNext = () => {
    counter >= 3 ? setCounter(0) : setCounter(counter + 1);
  };

  const [welcomeMessage, setwelcomeMessage] = useState(true);

  const changeWelcomeState = (dataFromChild) => {
    setwelcomeMessage(dataFromChild);
  };

  if (welcomeMessage === true) {
    return (
      <>
        <Welcome handleStart={changeWelcomeState}></Welcome>
      </>
    );
  } else {
    return (
      <>
        <BackgroundImg background={HeroStory[counter].img}>
          <Button textBtn={"Anterior"} handleClick={moveBack} />
          <Button textBtn={"Següent"} handleClick={moveNext} />
          {<Escena counter={counter} />}
        </BackgroundImg>
      </>
    );
  }
}

export default App;
