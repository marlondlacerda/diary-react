import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="col-md-12 bg-dark py-2 text-center">
    <nav className="navbar bg-dark navbar-dark">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="navbar-brand ms-5" exact to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand ms-5" exact to="/adicionar">Adicionar Contato</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
