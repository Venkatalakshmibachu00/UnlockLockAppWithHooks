// Style your elements here
import styled from 'styled-components'

export const UnlockAppContainer = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 60px;
 font-family: 'Roboto';
 background-image: linear-gradient(to top,  #3c2940, #0b0c1e);
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const LockImg = styled.img`
  height: 45px;
  width: 43px;
`

export const Text = styled.p`
  font-size: 15px;
  color: #e2e8f0;
  font-family: 'Roboto';
`

export const LockButtonContainer = styled.div`
  text-align: center;
`

export const Button = styled.button`
  padding: 5px;
  padding-left: 13px;
  padding-right: 13px;
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`
