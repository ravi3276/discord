import React from 'react'
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
function Sidebar() {
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
                     
                     />
                </div>

                <div className="sidebar__channelslist">
                <SidebarChannels />
                <SidebarChannels />
                <SidebarChannels />
                
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
            <Avatar />
            <div className="searchbar__profileinfo">
                <h3>Ravi Teja</h3>
                <p>#F27SR</p>
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
