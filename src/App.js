import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

const App = () => {

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ () => <Home /> } />

        <Route path="/adicionar">
          <AddContact />
        </Route>

        <Route path="/editar/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
