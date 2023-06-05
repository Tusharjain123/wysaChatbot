
import { ChatScreen } from './components/ChatScreen';
import { Loginscreen } from './components/Loginscreen';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Bubble } from './components/Bubble';
import { Logout } from './components/Logout';


function App() {
  const userColor = JSON.parse(localStorage.getItem("colorChoice"))
  const color = {
    bodyColor: userColor ? userColor.bodyColor : "no-repeat linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)",
    eleColour: userColor ? userColor.eleColour : "#fff"
  }
  localStorage.setItem("colorChoice", JSON.stringify(color))
  window.onload = ()=>{
    if (userColor){
      document.body.style.background = color.bodyColor
      document.querySelectorAll(".content").forEach(ele => {
         ele.style.background = color.eleColour;
      });
    }
  }
  const login = localStorage.getItem("login")
  return (
    <div className="App">
    <Routes>
    <Route path="/" element = {login ? <><Logout/></>: <><Loginscreen/><Bubble/></>}/>
    <Route path="/chat" element = {<ChatScreen/>}/>
    <Route path="/logout" element = {<Logout/>}/>

    </Routes>
    </div>
  );
}

export default App;
