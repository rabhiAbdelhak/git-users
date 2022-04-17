import React from "react";
import styled from "styled-components";

//local imports
import {useGithubContext} from "../../context";

const Followers = () => {
  const { followers } = useGithubContext();
  return (
    <Wrapper>
      <Title>Followers</Title>
      <Items>
        {followers.map((follower,index) => {
          const {id, avatar_url, login, url} = follower
          return ( 
            <Fllower key={id}>
              <img src={avatar_url} alt="avatar" />
              <Info>
                <Name>{login}</Name>
                <ProfileLink href="/">
                 {url}
                </ProfileLink>
              </Info>
            </Fllower>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default Followers;

const Wrapper = styled.article`
  position: relative;
  height: 350px;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  flex: 1;
`;

const Title = styled.span`
  position: absolute;
  padding: 10px;
  background: var(--clr-grey-10);
  top: 0;
  left: 0;
  transform: translateY(-95%);
  color: var(--color-grey-5);
  border-radius: var(--radius);
  font-size: 18px;
  min-width: 100px;
  text-align: center;
`;

const Items = styled.div`
  max-height: 100%;
  padding: 20px;
  overflow: scroll;

`;
const Fllower = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

const Info = styled.div``;

const Name = styled.h4`
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 5px;
`;

const ProfileLink = styled.a`
  font-size: 13px;
  color: var(--clr-grey-4);
  transition: var(--transition);

  :hover {
    color: var(--clr-grey-9);
  }
`;
