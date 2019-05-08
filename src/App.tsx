import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MenuAppBar from './MenuAppBar';

function Index() {
  return (
    <header className="App-header">
      <h1>Who's Up Next</h1>
      <p>Keep track of your important relationships</p>
    </header>
  );
}

function Events() {
  return (
    <header className="App-header">
      <h1>Events</h1>
      <p>Keep track of your important events</p>
    </header>
  );
}

function People() {
  return (
    <header className="App-header">
      <h1>People</h1>
      <p>Keep track of your important people</p>
    </header>
  );
}

function Account() {
  return (
    <header className="App-header">
      <h1>Account</h1>
      <p>Keep track of your account</p>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <MenuAppBar />
        <Route exact path="/" component={Index} />
        <Route path="/account/" component={Account} />
        <Route path="/events/" component={Events} />
        <Route path="/people/" component={People} />
      </div>
    </Router>
  );
}
