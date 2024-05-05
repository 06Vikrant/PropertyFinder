import React from 'react'
import './style.scss';

import { Chat, UserList } from '../../components'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className='userInfoContainer'>
              <span>Avatar: 
                <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
              </span>
              <span>Username: <b>John Doe</b></span>
              <span>Email: <b>JohnDoe@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <UserList />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Profile
