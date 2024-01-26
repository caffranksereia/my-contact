import React from 'react';
import RegisterContact from './register.contact';
import GlobalStyled from './globalStyled';
import styled from 'styled-components';
import NavBarComponents from './navbar';
import ModalContact from './modal.contact';

const DivGrid = styled.div`
display: Grid;
width:100%;
height: 100px;`;
function Home() {
  return (
    <DivGrid>
      <GlobalStyled/>
      <NavBarComponents/>
      <RegisterContact/>
      <ModalContact/>
    </DivGrid>
  );
}

export default Home;
