

import './Escena.css'

export const Escena = ({counter,heroStory}) => {

const storyText = heroStory.map((elem,index ) =>(
  
  <div  key={index} className={`${(elem.id)  === counter ? "pinkStyle": "normalStyle" }`}>
     {elem.text}
    
  </div>
  ))

return (
  <>
{storyText}
  </>
)

}