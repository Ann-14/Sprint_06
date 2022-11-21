import "./App.css";
import { Escena } from "./components/escena/Escena";

function App() {
  const HeroStory = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    },
    { text: "L'heroi va decidir travessar la porta que el portava a casa" },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
    },
  ];

  return (
    <>
  <Escena text={HeroStory[0].text} />;
  <Escena text={HeroStory[1].text} />;
  <Escena text={HeroStory[2].text} />;
  <Escena text={HeroStory[3].text} />;
  </>
  )
}

export default App;
