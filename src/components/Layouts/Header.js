import { useAuth0 } from '@auth0/auth0-react';
import {useState} from 'react'
import styled from 'styled-components';

const Header = () => {
  const [showActions, setShowActions] = useState(false)
  const {isAuthenticated, logout, user, isLoading} = useAuth0(); 
  console.log({isAuthenticated, user, isLoading});
  const isUser = isAuthenticated && user

  const toggleActions = () => {
    setShowActions(prevShow => !prevShow);
  }
  return (
    <Wrapper>
      <Logo>
          <img src='assets/images/logo.png' alt='logo'/>
      </Logo>
          <User>
          {isUser && <Circle src={user.picture} alt={user.name} className='_flex-center' onClick={toggleActions}/>}
            {showActions && (<Actions>
              {isUser && <Username>{user.name}</Username>}
              <button className='btn' onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
            </Actions>)}
          </User>
      
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
min-height: 100px;
padding: 20px 30px;
background: white;
display: flex;
justify-content: space-between;
align-items:center;

`

const Logo = styled.div`
width: 40px;
height: 40px;

`


const User = styled.div`
display: flex;
align-items: center;
height: 70px;
gap: 15px;
position: relative;
`

const Actions = styled.div`
position: absolute;
display: flex;
width: 140px;
flex-direction: column;
background: whitesmoke;
bottom: -10px;
transform: translate(-50%, 100%);
padding: 10px;
box-shadow: 3px 3px 7px var(--clr-grey-6);
border-radius: 5px;
z-index:10;

::before {
  content:'';
  width:0;
  height:0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent whitesmoke transparent;
  position: absolute;
  top: -20px;
  right: 30px;
}

.btn {
font-size: 10px;
color: tomato;
margin-top: 10px;
}
.btn:hover{
  background: tomato;
  color:white;
}
`

const Circle = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
box-shadow: 3px 3px 7px var(--clr-grey-7);
cursor: pointer;

:hover{
  transform: scale(1.06);
}
`
const Username = styled.span`
color: var(--clr-grey-4);
font-size: 10px;
text-align: center;
letter-spacing: 1px;
cursor: pointer;

:hover{
  color: var(--clr-grey-7);
}
`
