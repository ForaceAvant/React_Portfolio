import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

import './App.css';

import Footer from './components/Footer'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "Forace Avant",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'SAMPLE TITLE',
        subTitle: 'SAMPLE SUBTITLE',
        text: 'SAMPLE SMALLER TEXT'
      },
      about: {
        title: 'SAMPLE TITLE',
      },
      contact: {
        title: 'SAMPLE TITLE',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Header />

          <Footer />

        </Container>
      </Router>
  );
  }
}

export default App;
