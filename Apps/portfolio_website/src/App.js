import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './styles.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid">
          <div className="grid-logo">
         <img className="logo" src="images/sglogo.png" alt="Shanice" />
         </div>
          <Nav />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/portfolio" component={Portfolio}/>
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div> 
      </BrowserRouter>
    )
  }
}

export default App;
