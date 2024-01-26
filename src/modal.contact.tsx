import React from 'react';
import styled from 'styled-components';

const DivGrid = styled.div`
    display: grid;
    width:900px;
    height: 450px;
    background:#d9d9d9;
    border: 2px solid black;
`;
const DivText= styled.div`
    display: flex;
    width:100%;
    height: 45px;
    justify-content: center;
`;
const Form = styled.form`
    display: grid;
    width:875px;
    height: 376px;
    margin:10px;10px;10px;10px;
    
`;
const FormHead = styled.form`
    display: flex;
    width:100%;
    height: 20px;
    justify-content:center;
    
`;
const FormFooter = styled.form`
    display: flex;
    width:100%;
    height: 50px;
    margin:1px;
    justify-content:center;
`;
const DivContact = styled.div`
width:500px;
min-height: 15%;
max-height:25%;
`
const DivInput = styled.div`
`
const Input = styled.input`
width:400px;
height: 25px;
`;
const InputHead = styled.input`
width:400px;
height: 20px;
`;
const InputAge = styled.input`
width:50px;
`;
const Button = styled.button`
width:300px;
height: 20px;
`;

const Title = styled.h1`
    font-color = 00000;
    margin: 1px;5px;5px;5px
`;


function ModalContact() {
  return (
    <DivGrid>
      <DivText>
        <Title>
          Contact
        </Title>
      </DivText>
      
    <Form>
      <FormHead>
        <label>Nome</label>
          <InputHead></InputHead>
          <label>Idade</label>
          <InputAge></InputAge>
      </FormHead>
      <DivText>
      Numero de telefone:
      </DivText>
      <FormFooter>
        <Button>+</Button>
          <DivContact>
            <DivInput>
              <Input></Input>
            </DivInput>
          </DivContact>
          
      </FormFooter>
    </Form> 
    <Button>Save</Button> 

  </DivGrid>
  );
}

export default ModalContact;
