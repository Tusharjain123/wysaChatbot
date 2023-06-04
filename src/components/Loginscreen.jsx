import React, { useState } from 'react'
import "../styles/login.css"

export const Loginscreen = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        e.preventDefault()
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <div className="logo">
                <img src="/images/wysa.png" alt='Wysa' width={200} height={100} />
            </div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="textbox">
                    <input type="email" name='email' placeholder="Username" value={info.email} onChange={handleChange} required/>
                    <span className="material-symbols-outlined"> account_circle </span>
                </div>
                <div className="textbox">
                    <input type="password" name='password' value={info.password} placeholder="Password" onChange={handleChange} required/>
                    <span className="material-symbols-outlined"> lock </span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
