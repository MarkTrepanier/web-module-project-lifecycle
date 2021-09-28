import React from "react";
import Axios from "axios";

class User extends React.Component{
  state={}

    // componentDidMount(){
    //     this.props.userdata=== undefined ? console.log('undefined get'):
    //     Axios.get(this.props.userdata.followers_url)
    //     .then(resp=>this.setState({...this.state, followers:resp.data}))
    //     .catch(er=>console.log(er));
    // }

    render(){
        const {userdata, followers}= this.props;
        return(
            <div>
                <div>
                    <h1>{userdata.login}</h1>
                    <img src={userdata.avatar_url} alt='user img' />
                    <h2>{userdata.name}</h2>
                    <p>{userdata.bio}</p>
                    <p>Followers: {userdata.followers}</p>
                    <p>Following: {userdata.following}</p>
                    {followers.map(follower=>{
                        return(<h3>{follower.login}</h3>);
                    })}
                </div>
            </div>
        );
    }
}

export default User;