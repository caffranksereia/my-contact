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

export interface IContact{
  name:string;
  age?:string;
  number_phone?:string;
}

const ContactComponent = ({name}:IContact)=>{
  return (
    <DivGrid>
    <Form>
        <label>{name}</label>
    </Form>
  </DivGrid>
  );
}

export default ContactComponent;
