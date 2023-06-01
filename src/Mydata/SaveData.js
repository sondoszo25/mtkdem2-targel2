import React from 'react';
import '../Chat/Chat.css'
import dimg from '../dimg.png'






function Me({data}) {

    var srcimg;
    if (data.profilePic) {
        srcimg= data.profilePic
    }
    else {
        srcimg = dimg;
    }
    
    return (
        <>
            <img src={srcimg} className="rounded-circle imageid"></img><span id="chatme">{data.displayName}</span>
        </>
    )
}
export default Me;



