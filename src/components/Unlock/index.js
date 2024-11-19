// Write your code here
import {useState} from 'react'

import {
  UnlockAppContainer,
  LockContainer,
  LockImg,
  Text,
  LockButtonContainer,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onClickUnlockBtn = () => setLock(prevState => !prevState)

  const lockImg = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = isLock ? 'lock' : 'unlock'

  const text = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const btnText = isLock ? 'Unlock' : 'Lock'

  return (
    <UnlockAppContainer>
      <LockContainer>
        <LockImg alt={altText} src={lockImg} />
        <Text>{text}</Text>
      </LockContainer>
      <LockButtonContainer>
        <Button onClick={onClickUnlockBtn}>{btnText}</Button>
      </LockButtonContainer>
    </UnlockAppContainer>
  )
}

export default Unlock
