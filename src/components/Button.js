
import '../styles/Button.css'
export const Button = ({textBtn, handleClick}) => {

  return (
    <button onClick={handleClick}>{textBtn}</button>
  )
}
