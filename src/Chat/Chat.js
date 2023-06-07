import './Chat.css';
import { Link } from 'react-router-dom'
import add from './add.png'
import deleteimg from './zz.png'
import React, { useEffect, useRef, useState } from 'react';
import Me, { frineds } from '../Mydata/SaveData.js'
import Contacts from '../Mydata/contacts';
import { removelast } from '../Mydata/contacts.js'
import { toko } from '../Signin/Signin.js'
import { lastlogin2 } from '../Signin/Signin.js';
import { getllmsg } from '../Mydata/contacts.js';
import { socket } from '../socket';
import { useNavigate } from 'react-router-dom'

async function getloggedinow(set) {
  try {
    const res = await fetch('http://localhost:5000/api/Users/' + lastlogin2, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko
      },
    });

    if (res.ok) {
      const result = await res.json();
      set(result);
    }
  } catch (error) {
  }
}


async function getcontacts(setMycontacts) {
  try {
    const res = await fetch('http://localhost:5000/api/Chats/', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko
      },
    });

    if (res.ok) {
      const result = await res.json();
      setMycontacts(result);
    }
  } catch (error) {
  }
}


async function getcontactss() {
  try {
    const res = await fetch('http://localhost:5000/api/Chats/', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko
      },
    });

    if (res.ok) {
      const result = await res.json();
      return result;
    }
  } catch (error) {
  }
}





function Chat() {

  const reftxt = useRef(null);
  function makeEmpty(e) {
    document.getElementById("getfr").value = "";
  }
  function makeEmptyy(e) {
    document.getElementById("getfrr").value = "";
  }


  const [useStatef, setf] = useState(true);
  const [frinedphoto, setfriendphoto] = useState(null);
  const [allmsg, setallmsg] = useState([]);
  const [friend133, setfriend133] = useState(null);
  const [loggedin, setloggedin] = useState({});
  const [myContatcs, setMycontacts] = useState([]);
  const [boolean, setboolean] = useState('');
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      await getloggedinow(setloggedin);
      await getcontacts(setMycontacts);
      socket.connect();
    }
    fetchData();
    if(!toko)
    {
      navigate('/');
    }
     
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onEvent(value) {
      const update = async () =>{
           await getcontacts(setMycontacts);
           if(friend133)
           {
            await getllmsg(setallmsg, friend133.id);
           }
      }
      update();
    }



    function onEvent2(value) {
      const update = async () =>{
           await getcontacts(setMycontacts);
         if(friend133){
           if(value.foo == friend133.id)
           {
               setfriend133(null);
               setfriendphoto(null);
               setallmsg(null);
           }
      }
    }
      update();
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('update', onEvent);
    socket.on('update2', onEvent2);
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('update', onEvent);
      socket.off('update2', onEvent2);
      socket.disconnect();
    };

  }, [friend133]);




  async function funcget() {
    var user = document.getElementById("getfr").value;
    var data = {
      username: user
    }

    const res2 = await fetch('http://localhost:5000/api/Chats', {
      'method': 'post',
      'headers': {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko
      },
      'body': JSON.stringify(data)
    }
    )
    if (res2.status != 200) {
      alert("there is no username like this! or already added")

    }
    else {
      await getcontacts(setMycontacts);
    }
  }


  async function funcgett() {
    var user = document.getElementById("getfrr").value;
    var chatss= await getcontactss();
    var foundChat = chatss.find(chat => chat.user.username == user);
    let idd9;
    if(foundChat)
    {
      idd9=foundChat.id;
      console.log(idd9);
    }
    else{
      alert("not found that user");
      return;
    }
    if(friend133){
     if(user == friend133.user.username)
     {
      setfriend133(null);
      setfriendphoto(null);
      setallmsg(null);
     }
    }
    const res2 = await fetch('http://localhost:5000/api/Chats/' + idd9, {
      'method': 'DELETE',
      'headers': {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko
      }
    }
    )
    if (res2.status != 204) {
      alert("CANT Delete");
    }
    else {
      await getcontacts(setMycontacts);
    }
  }



  async function sendmsg(msg) {
    if (friend133) {
      const data = {
        msg: msg
      }
      var idd = '' + friend133.id;
      const res2 = await fetch('http://localhost:5000/api/Chats/' + idd + "/Messages", {
        'method': 'post',
        'headers': {
          'Content-Type': 'application/json',
          'authorization': 'bearer ' + toko
        },
        'body': JSON.stringify(data)
      });

      await getllmsg(setallmsg, friend133.id);
      await getcontacts(setMycontacts);
    }
  }






  function sendmsgg() {
    if (reftxt.current.value) {
      sendmsg(reftxt.current.value);
    }
    reftxt.current.value = '';
  }

  var frinedss = myContatcs.map((friend, key) => {
    return <Contacts {...friend} key={key} set={setfriendphoto} set2={setallmsg} set3={setfriend133}></Contacts>

  });
  return (
    <>
      <div id="GreenDivvv">

        <Link id="logout" to='/' onClick={removelast} className="btn btn-danger">Logout</Link>
      </div>
      <div id="chatscreen">
        <div id="photodiv">
          {frinedphoto}
        </div>
        <div id="yellowdiv">
          {allmsg}
        </div>
        <div id="chatting">
          <input type="text" ref={reftxt} id="textbox" placeholder="New message here.."></input>
          <button type="button" className="btn btn-light" id="sendbtn" onClick={sendmsgg}><span id="sendword" >send</span></button>
        </div>
      </div>

      <div id="friends">

        <div id="me">
          <Me data={loggedin}></Me>
          <img src={add} onClick={makeEmpty} type="button" width="16" height="16" fill="currentColor" className="bi bi-person-plus badd"
            viewBox="0 0 16 16" data-bs-target="#exampleModal" data-bs-toggle="modal"></img>

              <img src={deleteimg} onClick={makeEmptyy} type="button" width="16" height="16" fill="currentColor" className="bi bi-person-plus badd90"
            viewBox="0 0 16 16" data-bs-target="#exampleModal2" data-bs-toggle="modal"></img>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Add new contact</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="text" id="getfr" placeholder="Contact's identifier"></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={funcget} className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                </div>
              </div>
            </div>
          </div>






          <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel2">Delete contact</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="text" id="getfrr" placeholder="Contact's identifier"></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={funcgett} className="btn btn-primary" data-bs-dismiss="modal">Delete</button>
                </div>
              </div>
            </div>
          </div>










        </div>
      </div>
      <div id="contactsadd">
        {frinedss}



      </div>
    </>
  );

}

export default Chat;