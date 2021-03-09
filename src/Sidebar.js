import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannels from './SidebarChannels';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import db,{auth} from './firebase'
function Sidebar() {
    const user=useSelector(selectUser)
    const [channels,setChannels]=useState([])

        useEffect(()=>{
            db.collection('channels').onSnapshot(snapshot =>(
                setChannels(snapshot.docs.map(doc=>({
                    id: doc.id,
                    channel: doc.data()
                })))
            ))
        },[])


    const addchannels=()=>{
        const channelName=prompt('enter your channel name')

        if (channelName) {
            db.collection('channels').add({
                channelName:channelName,
            })
        }
    }

    return (
        <div className="sidebar">

            <div className="sidebar__top">
            <h3>Product Engineering</h3>
            <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon
                     className="addchannel"
                     onClick={addchannels}
                     />
                </div>

                <div className="sidebar__channelslist">

                {
                    channels.map((({id, channel})=>(
                        <SidebarChannels key={id} id={id} channelName={channel.channelName}/>

                    )))
                }

               
                
                </div>

            </div>
            <div className="sidebar__voice">
            <SignalCellularAltIcon 
            fontSize="large"
            className="sidebar__icon"/>

            <div className="sidebar__voiceinfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>

            <div className="searchbar__voiceicons">
            <InfoIcon />
            <CallIcon />
            </div>
            </div>

            <div className="searchbar__profile">
            <Avatar 
            onClick={()=>auth.signOut()}
            src={user.photo}/>
            <div className="searchbar__profileinfo">
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)}</p>
            </div>
            <div className="searchbar__profileicon">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
            </div>

        </div>
    )
}

export default Sidebar
