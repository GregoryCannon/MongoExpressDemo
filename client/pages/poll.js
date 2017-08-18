import React from 'react';

class Poll extends React.Component{
  render() {
    return (
      <div>
        <h1>This is the Poll Screen</h1>
        <h4>Nothing here hoss, we'll need more funding to build a frontend</h4>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

module.exports = Poll;
