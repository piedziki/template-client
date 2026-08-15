import './main.css';
import TextBox from "../components/textbox.js";
import PostBox from '../components/postbox.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PopUp from '../components/popUp.js';
import { jwtDecode } from "jwt-decode";
import MyHeader from "../components/header.js";


function HomePage() {
  const [loginLabel, setLoginLabel] = useState("Login");
  const [showPopUp, setShowPopUp] = useState(false);  
  const token = localStorage.getItem('jwtToken'); //
  const [user, setUser] = useState('');
  const [fakeToken, setFakeToken] = useState(false);

  const manipularLoginButton = (e) =>{
   setShowPopUp(true)
   setFakeToken(true)
  }

  return (
    <div className="grid-container">
    <header className="header">
        <MyHeader logedin={fakeToken}
          logout={() => setFakeToken(false)}
          login={manipularLoginButton}></MyHeader>

    {}
      </header>
    <aside className="sidebar">l</aside>
    <main className="content">
    <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
            
            </PopUp>
            <Link to='/doces'>Doces </Link>
            <Link to='/calculadora'>Calculadora</Link>
      {TextBox()}
      {PostBox("JUJUBA", user)}   
      {PostBox("Frutas", "prefiro chocolate")}
      <div className="post"></div>
      <div className="post"></div>
    </main>
  </div>
  );
}

export default HomePage;
