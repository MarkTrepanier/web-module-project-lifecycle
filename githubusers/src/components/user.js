import React from "react";
import Axios from "axios";
import Styled from 'styled-components';

class User extends React.Component{


    render(){
        const CardStyle = Styled.div`
            background-color:blue;
            flex-direction: column;
            align-items: center;
            text-align:center;
            color: white;
            width:50%;
            
            h3{background-color:darkBlue;}
            div{
                background-color:lightBlue;
                color: white;
            }
        `
        const {userdata, followers}= this.props;
        return(
            <div>
                <CardStyle>
                    <h1>{userdata.login}</h1>
                    <img src={userdata.avatar_url} alt='user img' />
                    <h2>{userdata.name}</h2>
                    <p>{userdata.bio}</p>
                    <p>Followers: {userdata.followers}</p>
                    <p>Following: {userdata.following}</p>
                    <h3>Followers</h3>
                    <div>
                        {followers.map(follower=>{
                            return(<h4 className='follower' key={follower.id}>{follower.login} {follower.id}</h4>);
                        })}
                    </div>
                </CardStyle>
            </div>
        );
    }
}

export default User;