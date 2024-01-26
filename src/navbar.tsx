import React from 'react';
import SearchContact from './search.contact';
import styled from 'styled-components';

const DivGrid = styled.div`
display: Grid;
background:#d9d9d9;
width:100%;
height: 60px;`;
function NavBarComponents() {
  return (
    <DivGrid>
      <SearchContact/>
    </DivGrid>
  );
}

export default NavBarComponents;
