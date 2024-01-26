import React from 'react';
import styled from 'styled-components';

const DivGrid = styled.div`
    display: Grid;
    width:100%;
    height: 100px;
`;
const Form = styled.form`
    display: Grid;
    width:200px;
    height: 100px;
`;
const Input = styled.input`
width:100%;
height: 100px;
`;

const Button = styled.button`
width:100%;
height: 100px;
`;



function ModalEditComponent() {
  return (
    <DivGrid>
    <Form>
        <label>Nome</label>
        <Input></Input>
        <label>Idade</label>
        <Input></Input>
        <label>Numero de telefone</label>
        <Input></Input>
        <Button>+</Button>
    </Form>
  </DivGrid>
  );
}

export default ModalEditComponent;
