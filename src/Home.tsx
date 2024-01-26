import React from 'react';
import RegisterContact from './register.contact';
import SearchContact from './search.contact';

function Home() {
  return (
    <div>
      <SearchContact/>
      <RegisterContact/>
    </div>
  );
}

export default Home;
