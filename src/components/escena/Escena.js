
import {HeroStory} from "../data/HeroStory"
import './Escena.css'

export const Escena = (props) => {

const storyText = HeroStory.map((elem,index ) =>(
  
  <div key={index} className={`${(elem.id)  === props.counter ? "pinkStyle": "normalStyle" }`}>
     {elem.text}
    
  </div>
  ))

return (
  <>

 <div>{storyText}</div>
 <img src={HeroStory[props.counter].img} alt='random' ></img>
 

  </>
)

}