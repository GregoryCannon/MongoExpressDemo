import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component{
  render() {
    return (
      <center>
        <div>
          <h1>Welcome to the Poll Boilerplate</h1>
          <form>
            <Link to='/poll'>Poll Screen</Link>
          </form>
        </div>
      </center>
      );
  }
}

module.exports = Homepage;
