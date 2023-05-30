import './Signin.css';
import { Link, useNavigate } from 'react-router-dom'
import { createElement, useState } from 'react';
import { check, lastlogin } from '../Mydata/SaveData.js';
export var lastlogin2;
export var toko;
function Signin() {
  const navigate = useNavigate();

  const navigateChat = async (e) => {

    e.preventDefault();
    const user = document.getElementById('user1').value;
    const password = document.getElementById("ps").value;
    const data = {
      username: user,
      password: password
    }
    const res = await fetch('http://localhost:5000/api/Tokens', {
      'method': 'post', // send a post request
      'headers': {
        'Content-Type': 'application/json', // the data (username/password) is in the form of a JSON object
      },
      'body': JSON.stringify(data) // The actual data (username/password)
    }
    )
    toko= await res.text();
    if (res.status == 404) {
      alert('Invalid username and/or password')
    }
    else {
      lastlogin2=user;
    
      navigate('/Chat');
    }
  };





  return (
    <>
      <div id="GreenDivv">
      </div>

      <form id="UserNameBoxx" onSubmit={navigateChat} >

        <div className="distance22">
          Username: <input id="user1" className="distance33" type="text" placeholder="username" required pattern='^[a-zA-Z\d]+$'></input>

        </div>

        <br></br>
        <div className="distance44">
          Password: <input id="ps" className="distancee" type="password" placeholder="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, minimum 8 characters"></input>
        </div>

        <input type="submit" id="placee" className="btn btn-primary" role="button" value="Login"></input>
        <div id="sentencee">Not registered?<Link to='/Register'>Click here</Link> to register</div>

      </form>

    </>
  );
}

export default Signin;
