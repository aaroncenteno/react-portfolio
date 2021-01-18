import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const pages = ['about', 'portfolio', 'contact', 'resume'];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // function ternaryNav() {
  //   return (
  //     <main>
  //       {(currentPage === 'portfolio') ? (
  //         <Portfolio></Portfolio>
  //       ) : (currentPage === 'contact') ? (
  //         <Contact></Contact>
  //       ) : (currentPage === 'resume') ? (
  //         <Resume></Resume>
  //       ) : (
  //         <About></About>
  //       )}
  //     </main>
  //   )
  // }

  return (
    <Router>
      <div>
        <Nav 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
          <main>
            <Switch>
              <Route exact path='/' component={About}/>
              <Route exact path='/portfolio' component={Portfolio}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/resume' component={Resume}/>
            </Switch>
          </main>
          {/* <main>{ternaryNav()}</main> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
