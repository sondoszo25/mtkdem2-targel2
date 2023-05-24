import './Signin.css';
import { Link, useNavigate } from 'react-router-dom'
import { createElement, useState } from 'react';
import { check } from '../Mydata/SaveData.js'

function Signin() {
  const navigate = useNavigate();

  const navigateChat = (e) => {

    e.preventDefault();

    if (check(document.getElementById('user1').value, document.getElementById("ps").value)) {
      navigate('/Chat');
    }
    else {
      alert("User or Password are wrong try agian!");
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
