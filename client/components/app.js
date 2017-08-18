import React from 'react';

const App = (props) => (
  <div className='app-root'>
    React App Container
    <div>{props.children}</div>
  </div>
);

export default App;
