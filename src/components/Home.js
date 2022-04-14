import React from 'react';
import styled from 'styled-components';


//local imports 
import Numbers from './Numbers';
import Search from './Search';
import User from './User';
const Home = () => {
  return (
    <Wrapper>
        <Search/>
        <Numbers/>
        <User/>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.main`
min-height: 100vh;
background: var(--clr-grey-9);
padding: 40px 30px;
`

const Info= styled.div`
padding: 30px 0;
display: flex;
gap: 30px;

@media (max-width: 960px){
  gap: 100px;
  flex-direction:column;
}
`