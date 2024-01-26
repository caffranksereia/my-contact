import React from 'react';
import styled from 'styled-components';

const DivGrid = styled.div`
    display: flex;
    width:100%;
    height: 100px;
`;
const Form = styled.form`
    display: flex;
    width:70%;
    height: 50px;
    margin: 10px;10px;5px;5px
`;
const Input = styled.input`
width:75%;
height: 45px;
margin: 1px;1px;1px;1px;
`;

const Button = styled.button`
width:70px;
height: 45px;
margin: 1px;1px;1px;1px;
`;
const Title = styled.h1`
    font-color = 00000;
    margin: 10px;25px;5px;5px
`;

function SearchContact() {
  return (
    <DivGrid>
       <Title>
        My Contacts
       </Title>
      <Form>
        <Input ></Input>
        <Button>Pesquisar</Button>
      </Form>
     
    </DivGrid>
  );
}

export default SearchContact;
