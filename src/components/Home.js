import React from 'react';
import styled from 'styled-components';

//local imports 
import Numbers from './Numbers';
import Search from './Search';
const Home = () => {
  return (
    <Wrapper>
        <Search/>
        <Numbers/>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.main`
min-height: 100vh;
background: var(--clr-grey-9);
padding: 40px 30px;
`