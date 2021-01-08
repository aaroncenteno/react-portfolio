import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const pages = ['about', 'portfolio', 'contact', 'resume'];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function ternaryNav() {
    return (
      <main>
        {(currentPage === 'portfolio') ? (
          <Portfolio></Portfolio>
        ) : (currentPage === 'contact') ? (
          <Contact></Contact>
        ) : (currentPage === 'resume') ? (
          <Resume></Resume>
        ) : (
          <About></About>
        )}
      </main>
    )
  }

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
