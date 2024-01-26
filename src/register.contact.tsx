import React from 'react';
import styled from 'styled-components';

const DivGrid = styled.div`
    display: flex;
    width:80%;
    height: 20px;
    justify-content:flex-end;
    margin-top:1px;
`;

const Button = styled.button`
width:20px;
height: 20px;
background:#d9d9d;
justify-content:center;
`;
function RegisterContact() {
  return (
    <DivGrid>
      <Button>+</Button>
    </DivGrid>
  );
}
export default RegisterContact;
