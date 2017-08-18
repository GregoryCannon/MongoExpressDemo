import React from 'react';
import { Link } from 'react-router-dom';

const Poll = (props) => (
  <center>
    <h1>This is the Poll Screen</h1>
    <h4>Sorry hoss, nothing here. We need more funding for a frontend.</h4>
    <Link to='/'>Take Me Home</Link>
  </center>
);

export default Poll;
