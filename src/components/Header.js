import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo>
          <img src='assets/images/logo.png' alt='logo'/>
      </Logo>
          <User>
            <Circle className='_flex-center'>US</Circle>
            <Username>user@gmail.com</Username>
            <button className='btn'>Logout</button>
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
`

const Circle = styled.div`
background : var(--clr-grey-7);
color: white;
width: 50px;
height: 50px;
border-radius: 50%;
font-weight: bold;
font-size: 20px;
`
const Username = styled.span`
color: var(--clr-grey-4);
font-size: 17px;
letter-spacing: 1px;
cursor: pointer;

:hover{
  color: var(--clr-grey-7);
}
`
