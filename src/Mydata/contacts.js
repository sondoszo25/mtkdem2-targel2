import './contacts.css';
import dimg from '../dimg.png'
import { useState } from 'react';
import Compphoto from './Compphoto';
import GetMsg from './msg';
import { toko } from '../Signin/Signin.js'
export var friend1 = [];
export var friend13 = '';
export function removelast() {
  friend1 = [];
  friend13 = '';
}



export async function getllmsg(set, id) {
  var idd = '' + id;
  const res = await fetch('http://localhost:5000/api/Chats/' + idd + "/Messages", {
    'headers': {
      'Content-Type': 'application/json',
      'authorization': 'bearer ' + toko // attach the token
    },
  }
  )
  const result = await res.json();

  const allmsgg = result.reverse().map((item, key) => {
    return <GetMsg {...item} key={key}></GetMsg>
  });

  set(allmsgg);

}

function Contacts({ user, id, lastMessage, img, username, set, set2, set3 }) {
  const [hovered, setHovered] = useState(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handle2() {
    setHovered(false);
  }

  var srcimg;

  if (user.profilePic !== "data:image/*;base64,") {
    srcimg = user.profilePic
  }
  else {
    srcimg = dimg;
  }



  var divStyle;
  if (hovered) {
    divStyle = { backgroundColor: 'blue' }
  } else {
    divStyle = { backgroundColor: 'white' }
  }

  var frined111;
  async function movescreen() {
    friend1 = [{ name: user.displayName, img: srcimg }];
    set3({ id: id, user: user });
    frined111 = friend1.map((item, key) => {
      return <Compphoto {...item} key={key} ></Compphoto>
    });
    set(frined111);
    await getllmsg(set2, id);
  }

  var hour;
  var min;
  if (lastMessage) {
    const time = new Date(lastMessage.created);
    hour = time.getHours();
    min = time.getMinutes();
  }
  return (
    <>
      <div type="button" id='jo1' onMouseOver={handleMouseOver} onMouseOut={handle2} style={divStyle} onClick={movescreen}>
        <img src={srcimg} className="rounded-circle iimageidd" alt="profile"></img>
        <span id="chatmeee">{user.displayName}</span>
        {(lastMessage &&
          <span id="chatin1">{lastMessage.content}</span>
        )}
        {(lastMessage &&
          <span id="Clock1">{hour}:{min}</span>
        )}
      </div>

    </>
  );
}

export default Contacts;





