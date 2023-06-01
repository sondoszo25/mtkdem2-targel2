import './Chat.css';
import { Link } from 'react-router-dom'
import imgbc from './imgbc.jpg'
import add from './add.png'
import React, { useEffect, useRef, useState } from 'react';
import Me, { frineds } from '../Mydata/SaveData.js'
import Contacts from '../Mydata/contacts';
import { removelast } from '../Mydata/contacts.js'
import { toko } from '../Signin/Signin.js'
import { lastlogin2 } from '../Signin/Signin.js';
import { getllmsg } from '../Mydata/contacts.js';

async function getloggedinow(set) {
  const res = await fetch('http://localhost:5000/api/Users/' + lastlogin2, {
    'method': 'GET',
    'headers': {
      'mode': 'no-cors',
      'accept': 'text/plain',
      'Content-Type': 'application/json',
      'authorization': 'bearer ' + toko // attach the token
    },
  }
  )
  const result = await res.json();
  set(result);

}

async function getcontacts(setMycontacts) {

  const res2 = await fetch('http://localhost:5000/api/Chats/', {
    'method': 'GET',
    'headers': {
      'mode': 'no-cors',
      'accept': 'text/plain',
      'Content-Type': 'application/json',
      'authorization': 'bearer ' + toko // attach the token
    },
  }
  )
  if (res2.status == 404) {
    return;
  }
  const result2 = await res2.json();
  setMycontacts(result2);

}

function Chat() {



  const reftxt = useRef(null);
  function makeEmpty(e) {
    document.getElementById("getfr").value = "";
  }
  const [useStatef, setf] = useState(true);
  const [frinedphoto, setfriendphoto] = useState(null);
  const [allmsg, setallmsg] = useState([]);
  const [friend133, setfriend133] = useState(null);
  const [loggedin, setloggedin] = useState({});
  const [myContatcs, setMycontacts] = useState([]);

  getloggedinow(setloggedin, setMycontacts);
  getcontacts(setMycontacts);





  async function funcget() {
    var user = document.getElementById("getfr").value;
    var data = {
      username: user
    }

    const res2 = await fetch('http://localhost:5000/api/Chats', {
      'method': 'post',
      'headers': {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + toko // attach the token
      },
      'body': JSON.stringify(data)
    }
    )
    if (res2.status == 400) {
      alert("there is no username like this! or already added")

    }
    else {
      getcontacts(setMycontacts);
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
          'authorization': 'bearer ' + toko // attach the token
        },
        'body': JSON.stringify(data)
      }
      )
      getllmsg(setallmsg, friend133.id);
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
        </div>
      </div>
      <div id="contactsadd">
        {frinedss}



      </div>
    </>
  );

}

export default Chat;