import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => (
  <center>
    <div>
      <h1>Welcome to the Mongo-Express-React Demo</h1>
      <h4>Check out /api for some Mongo interaction, or chill here and admire the minimalist React components</h4>
      <Link to='/poll'>Poll Screen</Link>
    </div>
  </center>
);

export default Homepage;
