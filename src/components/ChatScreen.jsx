import React, { useState } from 'react'
import message from "../messages.json"
import "../styles/chatScreen.css"
import { ColorPicker } from './ColorPicker'

export const ChatScreen = () => {
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
  }
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      messages.push({ "userMsgImage": reader.result })
      setMsg("")
      localStorage.setItem("messages", JSON.stringify(messages))
      setLoader(!loader)
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (<>
    <ColorPicker />
    <div className='container'>
      <div className="messenger">
        {messages.map((ele) => {
          return (!ele.userMsgImage ? <div className={`content ${ele.userMsg ? "userMsg" : ""}`} key={ele.key}>
            {ele.chatBot} {ele.userMsg}
          </div>
            :
            <div className="content userMsg" key={ele.key}>
              <img src={ele.userMsgImage} alt="Uploaded" width={200} height={200} />
            </div>)
        })
        }</div>
      <div className="user">
        <input type="text" name="userData" value={msg} id="usermsg" onChange={handleChange} placeholder='Enter Your Message' required/>
        <span className="material-symbols-outlined send" onClick={msg ? handleClick: ()=>{}}> 
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
