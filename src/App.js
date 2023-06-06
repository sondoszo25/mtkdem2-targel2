import './App.css';
import Chat from './Chat/Chat.js';
import Signin from './Signin/Signin.js';
import Signup from './Signup/Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/Register" element={<Signup />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
