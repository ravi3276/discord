import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';

function Message() {
    return (
        <div className="message">
        <Avatar />

        <div className="chat__messageinfo">
        <h4>
            Ravi Teja
            <span className="timestamp">timestamp....</span>

            </h4>
            <p>message..</p>
        </div>
        </div>
    )
}

export default Message
