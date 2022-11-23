

import './Escena.css'

export const Escena = ({counter,items}) => {



const storyText = items.map((elem,index) =>(
  <div key={index} className={`${index === counter ? "pinkStyle": "normalStyle" }`}>
     {elem.text}
  </div>
  ))

return (
  <>
{storyText}
  </>
)

}