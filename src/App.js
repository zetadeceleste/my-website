import React from 'react';
import './styles/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
   const { PUBLIC_URL } = process.env;
   return (
      <BrowserRouter basename={PUBLIC_URL}>
         <div className="layout">
            <Switch>
               <Route exact path="/" component={Home} />
               {/* <Route path="/about" component={About} /> */}
               {/* <Route path="/projects" component={Projects} /> */}
               {/* <Route path="/contact" component={Contact} /> */}
               {/* <Route path="/resume" component={Resume} /> */}
               {/* <Route component={NotFound} status={404} /> */}
            </Switch>
         </div>
      </BrowserRouter>
   );
};

export default App;
