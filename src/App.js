import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Men from './component/Men';
import Women from './component/Women';
import Kids from './component/Kids';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Route exact path='/' component={Home} />
          <Route exact path='/Men' component={Men} />
          <Route exact path='/Women' component={Women} />
          <Route exact path='/Kids' component={Kids} />
      </Router>
    </div>
  );
}

export default App;
