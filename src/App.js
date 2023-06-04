import { useState } from 'react';
import { ChatScreen } from './components/ChatScreen';
import { Loginscreen } from './components/Loginscreen';
import './App.css';

function App() {
  console.log(localStorage.getItem("chat"))
  const [chat,setChat] = useState(localStorage.getItem("chat")? localStorage.getItem("chat"): false)
  const userColor = JSON.parse(localStorage.getItem("colorChoice"))
  const color = {
    bodyColor: userColor ? userColor.bodyColor : "no-repeat linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)",
    eleColour: userColor ? userColor.eleColour : "#fff"
  }
  localStorage.setItem("colorChoice", JSON.stringify(color))

  if (userColor){
    document.body.style.background = color.bodyColor
    document.querySelectorAll(".content").forEach(element => {
       element.style.background = color.eleColour;
    });
  }
  const handleClick = (e) => {
    e.preventDefault()
    setChat(localStorage.getItem("chat"))
    localStorage.setItem("chat", !chat)
    setChat(!chat)
    console.log(chat)
  }
  
  return (
    <div className="App">
     {!chat && <Loginscreen/>}
     {chat && <ChatScreen/>}
      <div className="bubble" onClick={handleClick}>
        <img src="/images/chatbot.png" alt="chatbot" loading='lazy' width={100} height={100} />
      </div>
    </div>
  );
}

export default App;
