import React from 'react'
import './SidebarChannels.css';
import {useSelector,useDispatch} from 'react-redux';
import {setchannelInfo} from './features/appSlice'

function SidebarChannels({id,channelName}) {

    const dispatch =useDispatch();

    return (
        <div 
        onClick={()=>{
            dispatch(setchannelInfo({
                channelId:id,
                channelName:channelName
            }));
        }}
        className="sidebarchannel">
            <h4>
            <span className="sidebarchannel__hash">#</span>
            {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannels
