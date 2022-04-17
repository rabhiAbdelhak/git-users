import React , {useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

//local imports
import { useGithubContext } from '../context';


const Search = () => {
  const [username, setUsername] = useState();
  const {fetchUserData} = useGithubContext();
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log('submit');

      if(username) fetchUserData(username);
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <section>
      <Wrapper onSubmit={handleSubmit}>
        <Icon htmlFor='user'><FaSearch/></Icon>
        <Input type='text' placeholder='Search For A git User' name='user' id='user' onChange={handleChange}/>
        <button className='btn'>Search</button>
      </Wrapper>
    </section>
  )
}

export default Search;

const Wrapper = styled.form`
width: 100%;
height: 40px;
background: whitesmoke;
border-radius: var(--radius);
display: flex;
align-items: center;
padding: 0 8px;

button {
    width: 80px;
    font-size: 13px;
    padding: 5px;
    height: 
}
`
const Icon = styled.label`
font-size: 10px;
color: var(--clr-grey-7);
cursor:pointer;

`

const Input = styled.input`
flex: 1;
margin: 0 8px;
border:none;
padding: 7px;
background: whitesmoke;
border-radius: var(--radius);

:focus{
    outline:none;
    box-shadow: 3px 3px 7px var(--clr-grey-8);
}

::placeholder {
    opacity: 0.6;
}
`