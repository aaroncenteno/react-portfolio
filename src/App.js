import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  

  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
    </div>
  );
}

export default App;
