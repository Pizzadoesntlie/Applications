import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="grid-nav">
              <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
        )
    }
}

export default Nav;