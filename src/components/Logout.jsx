import React from 'react'
import "../styles/logout.css"
import { ColorPicker } from './ColorPicker'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
  const navigate = useNavigate()
  const login = JSON.parse(localStorage.getItem("login"))
  const handleClick = () => {
    localStorage.removeItem("login")
    navigate("/")
  }
  return (
    <>
    <ColorPicker/>
      <div className="logout">
        <div className="logo">
          <img src="/images/wysa.png" alt='Wysa' width={200} height={100} />
        </div>
        <div className="userLogin">
          <span className="material-symbols-outlined"> account_circle </span>
          <span className='userEmail'>{login?.email}</span>
        </div>
        <button className='btn' type="submit" onClick={handleClick}>{login ?"Logout" : "Login"}</button>
      </div>
    </>
  )
}
