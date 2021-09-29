import React from "react";
import Axios from "axios";

class User extends React.Component{

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
                    <h3>Followers</h3>
                    {followers.map(follower=>{
                        return(<h4 className='follower' key={follower.id}>{follower.login} {follower.id}</h4>);
                    })}
                </div>
            </div>
        );
    }
}

export default User;