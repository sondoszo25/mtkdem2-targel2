import './Signin.css';
import { Link, useNavigate } from 'react-router-dom'
import { createElement, useState } from 'react';
import { check } from '../Mydata/SaveData.js'

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

    const json = await res.json()
    if (res.status != 201) {
      alert('Invalid username and/or password')
    }
    else {
      // Correct username/password
      // Take the token the server sent us
      // and make *another* request to the homepage
      // but attach the token to the request
      const res = await fetch('http://localhost:5000/api/Users/' + user, {
        'headers': {
          'Content-Type': 'application/json',
          'authorization': 'bearer ' + json.token // attach the token
        },
      }
      )
      console.log("1")
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
