import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './generalStyle/common.scss'

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
