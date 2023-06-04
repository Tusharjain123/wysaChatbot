import { useState } from 'react';
import { ChatScreen } from './components/ChatScreen';
import { Loginscreen } from './components/Loginscreen';
import './App.css';

function App() {
  console.log(localStorage.getItem("chat"))
  const [chat,setChat] = useState(localStorage.getItem("chat")? localStorage.getItem("chat"): false)
  localStorage.setItem("colorChoice", {})

  
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
