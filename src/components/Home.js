import React from "react";
import styled from "styled-components";

//local imports
import Numbers from "./Numbers";
import Repos from "./Repos";
import Search from "./Search";
import User from "./User";
import Header from "./Header";
import Loading from './Loading';
import { useGithubContext } from "../context";

const Home = () => {
  const { loading } = useGithubContext();
  return (
    <Wrapper>
      <Header/>
      <Search />
      {!loading ? (
        <>
          <Numbers />
          <User />
          <Repos />
        </>
      ) : <Loading/>}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-9);
`;
