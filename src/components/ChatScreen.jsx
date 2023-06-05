import React, {useState,useEffect } from 'react'
import message from "../messages.json"
import "../styles/chatScreen.css"
import { ColorPicker } from './ColorPicker'
import { useNavigate, useLocation } from 'react-router-dom'

export const ChatScreen = () => {
  const navigate = useNavigate()
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const delay = parseInt(queryParams.get('delay')) || 1000;

  const messages = localStorage.getItem("messages") ? (JSON.parse(localStorage.getItem("messages"))) : message
  const [loader, setLoader] = useState(false)
  const [msg, setMsg] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setMsg(e.target.value)
  }

  const handleClick = () => {
    messages.push({ "userMsg": msg })
    localStorage.setItem("messages", JSON.stringify(messages))
    setLoader(!loader)
    setMsg("")
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      messages.push({ "userMsgImage": reader.result })
      localStorage.setItem("messages", JSON.stringify(messages))
      setLoader(!loader)
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prevMessages) => [
          ...prevMessages,
          messages[currentIndex]
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay); 
      return () => clearTimeout(timer);
    }
  }, [currentIndex, messages]);

  const handleRedirect = () => {
    localStorage.getItem("login") ? navigate("/logout") : navigate("/")
  }
  return (<>
    <span className="material-symbols-outlined back" onClick={handleRedirect}>
      arrow_back
    </span>
    <ColorPicker />
    <div className='container'>
      <div className="messenger">
        {visibleMessages.map((ele) => {
          return (!ele.userMsgImage ? <div className={`content ${ele.userMsg ? "userMsg" : ""}`} key={ele.id}>
            {ele.chatBot} {ele.userMsg}
          </div>
            :
            <div className="content userMsg" key={ele.id}>
              <img src={ele.userMsgImage} alt="Uploaded" width={200} height={200} />
            </div>)
        })
        }
      </div>
      <div className="user">
        <input type="text" name="userData" value={msg} id="usermsg" onChange={handleChange} placeholder='Enter Your Message' required />
        <span className="material-symbols-outlined send" onClick={msg ? handleClick : () => { }}>
          send
        </span>
        <input type="file" accept="image/png, image/jpeg, image/jpg" id='imgFile' onChange={handleImage} className='hidden' />
        <label htmlFor="imgFile">
          <span className="material-symbols-outlined add">
            add_circle
          </span>
        </label>
      </div>
    </div>
  </>
  )
}
