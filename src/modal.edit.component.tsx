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

export interface IModal{
  name?: string;
  age?:string;
  number_phone?:string;
}

const ModalEditComponent =({name,age,number_phone}:IModal)=>{
  return (
    <DivGrid>
    <Form>
        <label>Nome</label>
        <Input>{name}</Input>
        <label>Idade</label>
        <Input>{age}</Input>
        <label>Numero de telefone</label>
        <Input>{number_phone}</Input>
        <Button>+</Button>
    </Form>
  </DivGrid>
  );
}

export default ModalEditComponent;
