import React from 'react'
import styled from 'styled-components';
import {GoRepo, GoGistSecret} from 'react-icons/go';
import {FaUsers, FaUserShield} from 'react-icons/fa';

const Numbers = () => {
  return (
    <Wrapper>
       <Number>
           <Icon><GoRepo/></Icon>
           <Value>567</Value>
           <Name>Repos</Name>
       </Number>
       <Number>
           <Icon><FaUsers/></Icon>
           <Value>567</Value>
           <Name>Followers</Name>
       </Number>
       <Number>
           <Icon><FaUserShield/></Icon>
           <Value>567</Value>
           <Name>Following</Name>
       </Number>
       <Number>
           <Icon><GoGistSecret/></Icon>
           <Value>567</Value>
           <Name>Gists</Name>
       </Number>
    </Wrapper>
  )
}

export default Numbers

const Wrapper = styled.section`
margin: 40px 0;
min-height: 40px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 20px;


`

const Number = styled.div`
background: white;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 15px;
border-radius: var(--radius);
cursor: pointer;
position: relative;
overflow: hidden;
padding-bottom: 40px;
transition: 0.3s;

:hover{
    transform: scale(1.05);
}
`
const Icon = styled.span`
font-size: 35px;
width: 60px;
height: 60px;
background: var(--clr-primary-9);
color: var(--clr-primary-5);
display: flex;
justify-content:center;
align-items: center;
border-radius: 50%;

`

const Value = styled.h3`
margin: 15px;
font-size: 25px;
color: var(--clr-grey-7);
`

const Name = styled.span`
display: block;
position: absolute;
background: var(--clr-primary-9);
color: var(--clr-primary-4);
padding: 5px;
bottom:0;
left:0;
width: 100%;
height: 30px;
display:flex;
align-items:center;
justify-content:center;
font-weight: bold;
text-transform: uppercase;
text-align: center;
letter-spacing: 2px;
font-size: 13px;
`

