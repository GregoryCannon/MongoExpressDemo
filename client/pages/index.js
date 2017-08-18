import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component{
  render() {
    return (
      <center>
        <div>
          <h1>Welcome to the Mongo-Express-React Demo</h1>
          <h4>Checkout /api for some Mongo interaction, or chill here and admire the minimalist React components</h4>
          <Link to='/poll'>Poll Screen</Link>
        </div>
      </center>
      );
  }
}

module.exports = Homepage;
