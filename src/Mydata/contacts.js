import './contacts.css';
import dimg from '../dimg.png'
import { movescreen } from './SaveData';
import { useEffect, useState } from 'react';
import Chat from '../Chat/Chat';
import { users } from './SaveData';
import { lastlogin } from './SaveData';
import Compphoto from './Compphoto';
import GetMsg from './msg';
var srcimgg;
export var friend1 = [];
export var friend13 = '';
export function removelast() {
  friend1 = [];
  friend13 = '';
}

function Contacts({ username, name, img, set, set2,set3}) {
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handle2() {
    setHovered(false);
  }

  var srcimg;
  if (img) {
    srcimg = URL.createObjectURL(img);
  } else {
    srcimg = dimg;
  }



  var divStyle;
  if (hovered) {
    divStyle = { backgroundColor: 'blue' }
  } else {
    divStyle = { backgroundColor: 'white' }
  }

  var frined111;
  function movescreen() {
    if (typeof (users[lastlogin].msg[username]) !== 'undefined') {
      var allmsgg = users[lastlogin].msg[username].map((item, key) => {
        return <GetMsg {...item} key={key}></GetMsg>
      });
      set2(allmsgg)
    }
    else {
      set2([]);
    }
    friend1 = [{ name: name, img: srcimg }];
    set3(username);
    frined111 = friend1.map((item, key) => {
      return <Compphoto {...item} key={key} ></Compphoto>
    });
    set(frined111);
  }
  var lastmsg={};
if(typeof(users[lastlogin].lastmsg[username]) !== 'undefined'){
  console.log("hi im here please");
lastmsg=users[lastlogin].lastmsg[username];
console.log(lastmsg);

}

  return (
    <>
      <div type="button" id='jo1' onMouseOver={handleMouseOver} onMouseOut={handle2} style={divStyle} onClick={movescreen}>
        <img src={srcimg} className="rounded-circle iimageidd" alt="profile"></img>
        <span id="chatmeee">{name}</span>
        <span id="chatin1">{lastmsg.msg}</span>
        {(lastmsg.msg &&
      <span id="Clock1">{lastmsg.h}:{lastmsg.m}</span>
       ) }
      </div>
      
    </>
  );
}

export default Contacts;





