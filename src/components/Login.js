import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper className = '_flex-center'>
      <img src='assets/images/login-img.png' alt='loginimage' className='_updown-animation'/>
      <button className='btn'>Login/SignUp</button>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.main`
min-height: 100vh;
flex-direction:column;

img{
  width: 350px;
}
button {
  margin-top: 40px;
  background: var(--clr-grey-5);
  color: white;
}
` 