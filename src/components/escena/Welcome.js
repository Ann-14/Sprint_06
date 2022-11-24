import { WelcomeBackground, WelcomeCard,WelcomeText } from "./StyledEscena"

export const Welcome = ({handleStart}) => {
   const data = false
  return (
    <>
   <WelcomeBackground>
    <WelcomeCard>
        <WelcomeText>This is a stoy of a hero!</WelcomeText>
    <button onClick={() => handleStart(data)}>Start!</button>
    </WelcomeCard>
    </WelcomeBackground>
    </>
  )
}
