import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';
import { saveUser } from '../Mydata/SaveData.js';


const IMG = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    if (selectedImage != null) {
      document.getElementById("UserNameBox").style.height = "80%";
      document.getElementsByClassName("distance21")[0].style.top = "4%";
      document.getElementsByClassName("distance22")[0].style.top = "14%";
      document.getElementsByClassName("distance23")[0].style.top = "24%";
      document.getElementsByClassName("distance24")[0].style.top = "34%";
      document.getElementsByClassName("distance25")[0].style.top = "44%";
    }
    else {
      {
        document.getElementById("UserNameBox").style.height = "60%";
        document.getElementsByClassName("distance21")[0].style.top = "8%";
        document.getElementsByClassName("distance22")[0].style.top = "20%";
        document.getElementsByClassName("distance23")[0].style.top = "32%";
        document.getElementsByClassName("distance24")[0].style.top = "44%";
        document.getElementsByClassName("distance25")[0].style.top = "56%";
      }
    }
  });


  return (
    <>

      <div id="testme" className="distance25">
        <nav className="navbar">
          <div className="container-fluid">
            Picture:
            <div className="input-group distance190">
              <input id="imgupload" type="file" className="form-control" accept="image/*" onChange={(event) => {
                setSelectedImage(event.target.files[0]);

              }}></input>
            </div>
          </div>        </nav>
      </div>



      {selectedImage && (
        <img id="distance26" width="10px" src={URL.createObjectURL(selectedImage)} />
      )
      }

    </>
  );
};






function Signup() {


  const navigate = useNavigate();
  const navigateHome = (e) => {
    const password = document.getElementById("pass");
    const confirmPassword = document.getElementById("passc");
    const user = document.getElementById("user");
    const name = document.getElementById("namedis").value;
    const img = document.getElementById("imgupload").files[0];
    if (password.value != confirmPassword.value) {
      e.preventDefault();
      alert("Password did not match try again!");
      return false;
    } else {

      if (saveUser(user.value, password.value, name, img) == false) {
        e.preventDefault();
        alert("There is a Username like this Try again");
        return false;
      }
      e.preventDefault();
      alert("You have registered succesfully !! :) ");
      navigate('/');
      return true;
    }

  };


  return (
    <>
      <div id="GreenDiv">
      </div>

      <form id="UserNameBox" onSubmit={navigateHome} >

        <input type="submit" id="place" className="btn btn-primary" role="button" value="Register" ></input>
        <div id="sentence">Already registered?<Link to='/'>Click here</Link> to login</div>

        <div className="distance21">
          Username: <input id="user" className="distance3" type="text" placeholder="username" required pattern='^[a-zA-Z\d]+$'></input>

        </div>
        <br />
        <div className="distance22">
          Password: <input id="pass" type="password" name="password" placeholder="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></input>
        </div>

        <br />
        <div className="distance23">
          Confirm password: <input id="passc" type="password" name="confirmPassword" placeholder="password" required ></input>

        </div>
        <br />
        <div className="distance24">
          Display name: <input id="namedis" className="distance5" type="text" placeholder="name" required></input>

        </div>
        <IMG></IMG>
      </form>

    </>
  );
}




export default Signup;