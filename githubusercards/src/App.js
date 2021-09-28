import React, {useEffect} from 'react';
import Axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:{}
    };
  }
    componentDidMount(){
      console.log(this.state.user.length)
      Axios.get('https://api.github.com/users/fakelshub')
      .then(resp=>this.setState({...this.state, user: resp.data}))
      .catch(er=>console.error(er))
    }

  render(){

    return(
      <div>
        <h1>Happy Birthday!</h1>
        <p>
          - [ ] Fetch data from the Github API for a Github user<br/>
          - [ ] Display the user data on the DOM<br/>
          - [ ] Use class components when you need to hold any state or use any lifecycle methods
        </p>
        {!this.state.user ? <>ham</> : 
        <>{this.state.user.login}<br>
        </br>{this.state.user.url}</>} 
      </div>
    )
  }
}

export default App;
