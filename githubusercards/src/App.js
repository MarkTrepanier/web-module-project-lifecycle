import React from 'react';
import Axios from 'axios';
import User from './components/user';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:{},
      followers:[]
    };
  }
    componentDidMount(){
      Axios.get('https://api.github.com/users/fakelshub')
      .then(resp=>this.setState({...this.state, user: resp.data}))
      .then(()=>Axios.get(this.state.user.followers_url)
      .then(resp=>this.setState({
        ...this.state, 
        followers: resp.data})))
      .catch(er=>console.error('could not find' + er));
    }

  render(){

    return(
      <div>
        {this.state.user === undefined ? <>loading...</> : 
        <>
        <>{this.state.user.login}<br>
        </br>{this.state.user.url}</> 
        <User userdata={this.state.user} followers={this.state.followers}/>
        </>}
      </div>
    )
  }
}

export default App;
