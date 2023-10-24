import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const App = (prop) => {
  return (
    <Fragment>
      <header>
        <Link className="site-logo" to="/">#Farzi</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        {/* <nav>
          {prop.routers.map(r => <Link key={r.path} to={r.path}>{r.text}</Link>)}
        </nav> */}
      </header>
      <Routes>
        {prop.routers.map(r => <Route key={r.path} path={r.path} Component={r.compoment} />)}
      </Routes>
    </Fragment>
    
  )
}
export default App;
