import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Bubble = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/chat?delay=1000")
      }
    return (
        <div className="bubble" onClick={handleClick}>
            <img src="/images/chatbot.png" alt="chatbot" loading='lazy' width={100} height={100} />
        </div>
    )
}
