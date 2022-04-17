import React from "react";
import styled from "styled-components";
import { MdBusiness, MdLocationOn } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

//local imports
import { useGithubContext } from "../../context";

const Card = () => {
  const { user } = useGithubContext();

  const {
    avatar_url,
    twitter_username,
    html_url,
    login,
    company,
    location,
    bio,
    blog,
  } = user;
  return (
    <Wrapper>
      <Title>User</Title>
      <Info>
        <div>
          <img src={avatar_url} alt="userimage" />
          <div>
            <h4>{login}</h4>
            <p>@{twitter_username || "twitter_not_provided"}</p>
          </div>
        </div>
        <a href={html_url}>Follow</a>
      </Info>
      <Bio>{bio}</Bio>
      <Findhim>
        <Company>
          <Icon>
            <MdBusiness />
          </Icon>
          {company}
        </Company>
        <Location>
          <Icon>
            <MdLocationOn />
          </Icon>
          {location || 'location_not_provided'}
        </Location>
        <Website>
          <Icon>
            <CgWebsite />
          </Icon>
          <a href={`https://${blog}`}>{blog}</a>
        </Website>
      </Findhim>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.article`
  position: relative;
  height: 350px;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  padding: 30px;
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

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  > div > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  > div img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 30px;
  }

  a {
    background: transparent;
    border: 1px solid var(--clr-primary-4);
    padding: 10px;
    font-size: 17px;
    color: var(--clr-primary-4);
    border-radius: 30px;
    letter-spacing: 2px;
    transition: 0.3s;
  }

  a:hover {
    background: var(--clr-primary-4);
    color: white;
    cursor: pointer;
  }
`;

const Bio = styled.h4`
  margin: 20px 0;
  font-size: 18px;
  color: var(--clr-grey-5);
  font-weight: 500;
`;

const Findhim = styled.div`
  > div {
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`;

const Company = styled.div``;

const Location = styled.div``;

const Website = styled.div`
  a {
    text-decoration: none;
    color: var(--clr-primary-6);
    font-size: 18px;
    transition: 0.3s;
  }

  a:hover {
    color: var(--clr-grey-5);
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;
