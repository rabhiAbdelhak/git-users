import React , {useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

//local imports
import { useGithubContext } from '../../context';


const Search = () => {
  const [username, setUsername] = useState();
  const {fetchUserData, requests,loading, error} = useGithubContext();
  const handleSubmit = (e) => {
    e.preventDefault();
      if(username) fetchUserData(username);
      e.target.reset();
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <section>
      
      <Wrapper onSubmit={handleSubmit}>
        <Icon htmlFor='user'><FaSearch/></Icon>
        <Input type='text' placeholder='Search For A git User' name='user' id='user' onChange={handleChange}/>
        <button className='btn' disabled = {!(requests < 60 && !loading)}>Search</button>
        <h5>Requests : {requests}/60</h5>
      </Wrapper>
      {error.show && <ErrorWrapper><p>{error.msg}</p></ErrorWrapper>}
    </section>
  )
}

export default Search;

const ErrorWrapper = styled.div`
margin: 10px 0;
p{
  color: tomato;
  letter-spacing: 2px;
}
`
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
    text-align: center;
}

button:disabled{
  opacity:0.3;
}
button:hover:disabled{
  background: whitesmoke;
}

h5{
  margin:0 10px;
  color: var(--clr-grey-5);
}

@media(max-width:360px){
  h5{
    font-size: 9px;
    margin:0 5px;
  }
  button{
    width:55px;
    font-size: 8px;
  }
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

@media(max-width:400px){
  width: 85px;
}
`