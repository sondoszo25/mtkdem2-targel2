import './Chat.css';
import { Link } from 'react-router-dom'
import imgbc from './imgbc.jpg'
import add from './add.png'
import React, { useEffect, useRef, useState } from 'react';
import { addf } from '../Mydata/SaveData.js';
import Me, { frineds } from '../Mydata/SaveData.js'
import { users } from '../Mydata/SaveData.js';
import { lastlogin } from '../Mydata/SaveData.js';
import Contacts from '../Mydata/contacts';
import { friend1 } from '../Mydata/contacts';
import { removelast } from '../Mydata/contacts.js'
import Compphoto from '../Mydata/Compphoto.js'
import { friend13} from '../Mydata/contacts.js';
import GetMsg from '../Mydata/msg.js';


function Chat() {

  const reftxt=useRef(null);
  function makeEmpty(e) {
    document.getElementById("getfr").value = "";
  }
  const [useStatef, setf] = useState(true);
  const [frinedphoto, setfriendphoto] = useState(null);
  const [allmsg, setallmsg] = useState([]);
  const [friend133, setfriend133] = useState('');


  function funcget() {

    const name = document.getElementById("getfr").value;
    setf(name);
    if (useStatef) {
      addf(name);
    }
  }
  var frinedss = users[lastlogin].contactslist.map((friend, key) => {
    return <Contacts {...friend} key={key} set={setfriendphoto} set2={setallmsg} set3={setfriend133}></Contacts>

  });



  
  
  
  function sendmsg(msg)
  { 
   var allmsgg;
   const date=new Date();
   const m= date.getMinutes();
   const h=date.getHours();
   if(friend133){
      if(typeof(users[lastlogin].msg[friend133]) === 'undefined')
      {
          users[lastlogin].msg[friend133]=[{msg:msg,h:h,m:m}];
          
      }
     else{
      users[lastlogin].msg[friend133].push({msg:msg,h:h,m:m});
     }
     users[lastlogin].lastmsg[friend133]={msg:msg,h:h,m:m};
     allmsgg=users[lastlogin].msg[friend133].map((item,key) =>{
      return <GetMsg {...item} key={key}></GetMsg>                                                         
     });
   setallmsg(allmsgg);
    }
  }





function sendmsgg()
{
if(reftxt.current.value)
{
  sendmsg(reftxt.current.value);
} 
reftxt.current.value='';
}


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
          <button type="button"  className="btn btn-light" id="sendbtn" onClick={sendmsgg}><span id="sendword" >send</span></button>
        </div>
      </div>

      <div id="friends">

        <div id="me">
          <Me></Me>
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