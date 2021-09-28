import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={};
  }
  render(){
    return(
      <div>
      <h1>Happy Birthday!</h1>
      <p>
        - [ ] Fetch data from the Github API for a Github user<br/>
        - [ ] Display the user data on the DOM<br/>
        - [ ] Use class components when you need to hold any state or use any lifecycle methods</p>
        </div>
    )
  }
}

export default App;
