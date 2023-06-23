// Write your code here
import {useState} from 'react'

import {UnlockContainer, Image, Sen, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setUnlock] = useState(false)

  const onChange1 = () => setUnlock(prev => !prev)

  console.log({isLocked})

  return (
    <UnlockContainer>
      {isLocked ? (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Sen>Your Device is Unlocked</Sen>

          <Button onClick={onChange1} type="button">
            Lock
          </Button>
        </>
      ) : (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Sen>Your Device is Locked</Sen>

          <Button onClick={onChange1} type="button">
            Unlock
          </Button>
        </>
      )}
    </UnlockContainer>
  )
}
export default Unlock
