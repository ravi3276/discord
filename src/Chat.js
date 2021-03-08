import React from 'react'
import './Chat.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';


function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerleft">
                <h3>
                <span className="chat__headerhash">#</span>
                Youtube
                </h3>
                </div>

                <div className="chat__right">
                    <NotificationsIcon />
                    <EditLocationIcon />
                    <PeopleAltIcon />

                    <div className="chat__rightsearch">
                        <input placeholder="Search"/>
                        <SearchIcon />
                        </div>
                        <SendIcon />
                        <HelpIcon />
                </div>
            </div>

            <div className="chat__body">
            <Message /> 
          
            <Message /> 
 
            </div>

            <div className="chat__footer">
                <AddCircleIcon  fontSize="large"/>

                <form className="chat__form">
                <input type="text" placeholder="Message #Youtube" />
                <button type="submit">send</button>
                </form>

                <div className="chat__footericon">
                <GTranslateIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>

        </div>
    )
}

export default Chat
