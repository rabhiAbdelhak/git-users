import React from 'react'
import styled from 'styled-components';

//local imports
import Card from './Card';
import Followers from './Followers'

const User = () => {
  return (
    <Wrapper>
      <Card/>
      <Followers/>
    </Wrapper>
  )
}

export default User

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
max-height: 800px;
gap: 20px;
margin-top: 80px;
margin-bottom: 40px;

@media (max-width: 992px){
  flex-direction: wrap;
  gap: 80px;
}
`