import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';

function Message({timestamp,user,message}) {
    return (
        <div className="message">
        <Avatar src={user.photo}/>

        <div className="chat__messageinfo">
        <h4>
            {user.displayName}
            <span className="timestamp">
                {
                    new Date(timestamp?.toDate()).toUTCString()
                }
            </span>

            </h4>
            <p>{message}</p>
        </div>
        </div>
    )
}

export default Message
