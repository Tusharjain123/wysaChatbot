import React, { useState } from 'react'
import "../styles/logout.css"
import { ColorPicker } from './ColorPicker'
import { useNavigate } from 'react-router-dom'
import { Bubble } from './Bubble'

export const Logout = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)
  const login = JSON.parse(localStorage.getItem("login"))
  const handleClick = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("profilePic")
    navigate("/")
  }
  const profilePic = localStorage.getItem("profilePic")
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profilePic", reader.result)
      setLoader(!loader)
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <ColorPicker/>
      <div className="logout">
        <div className="logo">
          <img src="/images/wysa.png" alt='Wysa' width={200} height={100} />
         {profilePic && <img src={profilePic} alt="Profile Picture" width={200} height={200} />}
        </div>
        <div className="userLogin">
          <span className="material-symbols-outlined"> account_circle </span>
          <span className='userEmail'>{login?.email}</span>
        </div>
        <input type="file" accept='image/png, image/jpeg, image/jpg' name="profile" id="profile" onChange={handleImage} className='hidden'/>
        <label htmlFor="profile">
        <div className="btn profbutton">Upload Profile Picture</div>     
        </label>
        <button className='btn' type="submit" onClick={handleClick}>{login ?"Logout" : "Login"}</button>
      </div>
      <Bubble/>
    </>
  )
}
