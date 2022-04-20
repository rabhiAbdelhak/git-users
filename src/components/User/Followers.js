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
        {followers.length > 0 ? followers.map((follower,index) => {
          const {id, avatar_url, login, html_url} = follower
          return ( 
            <Fllower key={id}>
              <img src={avatar_url} alt="avatar" />
              <Info>
                <Name>{login}</Name>
                <ProfileLink href={html_url}>
                 Visit profile
                </ProfileLink>
              </Info>
            </Fllower>
          );
        }) : <h3 className='no-follower'>There is no followers</h3>}
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
  height: 100%;
  min-width: 400px;
  padding: 20px 0 20px 15px;
  overflow: scroll;
  
  .no-follower {
    text-align: center;
    margin-top: 40px;
    color: var(--clr-grey-8);
  }

  @media (max-width:450px){
    min-width: 240px;
  }
`;
const Fllower = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px 0 0;

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

  @media (max-width: 450px){
    font-size:12px;
    width: 200px;
  }

`;

const ProfileLink = styled.a`
  font-size: 13px;
  color: var(--clr-grey-4);
  transition: var(--transition);

  :hover {
    color: var(--clr-grey-9);
  }
  
  @media (max-width: 768px){
    font-size:10px;
    width: 200px;
  }

`;
