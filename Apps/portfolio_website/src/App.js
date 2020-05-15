import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './styles.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends React.Component {
  // <p>Hiiiiii. I'm getting my shit together finally! Well I'm trying it's a mf work in progress Okurrrr. </p>
  // <p>In conclusion, this will be my dope ass portfolio website bc I'm a mf QUEEN and shall not forget that.</p>
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
