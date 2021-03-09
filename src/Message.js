import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';

function Message({photo,displayName}) {
    return (
        <div className="message">
        <Avatar src={photo}/>

        <div className="chat__messageinfo">
        <h4>
            {displayName}
            <span className="timestamp">timestamp....</span>

            </h4>
            <p>message..</p>
        </div>
        </div>
    )
}

export default Message
