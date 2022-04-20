import React from "react";
import styled from "styled-components";

//local imports
import Numbers from "../Numbers";
import Repos from "../Repos";
import Search from "../Layouts/Search";
import User from "../User";
import Header from "../Layouts/Header";
import Loading from '../Layouts/Loading';
import { useGithubContext } from "../../context";

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
