import React, { useState } from 'react'
import './style.scss'

const Chat = () => {

    const [chat, setChat] = useState(true);

  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='message'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
        <div className="top">
            <div className="user">
                <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
                John Doe
            </div>
            <span 
                className='close'
                onClick={() => setChat(null)}
            >X</span>
        </div>
        <div className="mid">
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage userMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage userMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage userMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage userMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default Chat
