import React,{useState,useEffect} from 'react'
import firebase from 'firebase' 
import './Chat.css'
import db from './firebase';
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
import {useSelector} from 'react-redux';
import {selectchannelId,selectchannelName} from './features/appSlice'
import {selectUser} from './features/userSlice'
function Chat() {
    const [messages,setMessages]=useState([]);
    const [input,setInput]=useState('');
    const user=useSelector(selectUser);
    const channelId=useSelector(selectchannelId);
    const channelName=useSelector(selectchannelName);
    // console.log(input)
    // console.log(channelId)
    // console.log(channelName)
    useEffect(()=>{
        if(channelId){

            db.collection('channels').doc(channelId).collection('message')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(doc=>doc.data()))
            ))
        }
    },[channelId])


const sendmessage=(e)=>{
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('message').add({
            message:input,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        })

        setInput("")
}
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerleft">
                <h3>
                <span className="chat__headerhash">#</span>
                {channelName}
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
            {
                messages.map(message => (

                    <Message
                    message={message.message} timestamp={message.timestamp} user={message.user}
                    /> 
                ))
            }
          
 
            </div>

            <div className="chat__footer">
                <AddCircleIcon  fontSize="large"/>

                <form className="chat__form">
                <input 
                value={input}
                onChange={e=>setInput(e.target.value)}
                 placeholder={`Message #${channelName}`}
                  />
                <button
                onClick={sendmessage}
                type="submit">send</button>
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
