import React from "react";
import styled from "styled-components";
import { GoRepo, GoGistSecret } from "react-icons/go";
import { FaUsers, FaUserShield } from "react-icons/fa";

//local imports
import { useGithubContext } from "../context";

const Numbers = () => {
  const { repos, fellowers, user } = useGithubContext();
  const items = [
    {
      id: 1,
      name: "Repos",
      icon: <GoRepo />,
      value: user.public_repos,
      color: "orange",
    },
    {
      id: 2,
      name: "Followers",
      icon: <FaUsers />,
      value: user.followers,
      color: "green",
    },
    {
      id: 3,
      name: "Following",
      icon: <FaUserShield />,
      value: user.following,
      color: "red",
    },
    {
      id: 4,
      name: "Gits",
      icon: <GoGistSecret />,
      value: user.public_gists,
      color: "purple",
    },
  ];
  return (
    <Wrapper>
      {items.map((item) => {
        return (
          <Number>
            <Icon className = {item.color}>
              {item.icon}
            </Icon>
            <Value>{item.value}</Value>
            <Name>{item.name}</Name>
          </Number>
        );
      })}
    </Wrapper>
  );
};

export default Numbers;

const Wrapper = styled.section`
  margin: 40px 0;
  min-height: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Number = styled.article`
  background: var(--clr-grey-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: var(--radius);
  box-shadow: 3px 3px 7px var(--clr-grey-8);
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }

  .green {
    color: var(--clr-primary-5);
    background: var(--clr-primary-9);
  }

  .purple {
    color: rgb(121, 38, 121);
    background: rgba(121, 38, 121, 0.3);
  }

  .red{
    color: tomato;
    background: rgba(255, 99, 71, 0.3);
  }

  .orange{
    color: orange;
    background: rgba(255, 166, 0, 0.3);
  }
`;
const Icon = styled.span`
  font-size: 35px;
  width: 60px;
  height: 60px;
  background: color(${props => props.color} / 0.5);
  color:${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Value = styled.h3`
  margin: 15px;
  font-size: 25px;
  color: var(--clr-grey-7);
`;

const Name = styled.p`
  color: var(--clr-grey-4);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-size: 16px;
`;
