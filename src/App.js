import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
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
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
        <main>{ternaryNav()}</main>
      <Footer/>
    </div>
  );
}

export default App;
