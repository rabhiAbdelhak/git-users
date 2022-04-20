import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className='_flex-center'>
      <h1>404</h1>
      <h3>The Page you are looking for doesn't exist</h3>
      <Link to='/' className='btn'>Go Home</Link>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.main`
flex-direction: column;
min-height: 100vh;
background: var(--clr-grey-7)
`