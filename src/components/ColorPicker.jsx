import React, { useEffect } from 'react'
import "../styles/colorPicker.css"

const colorPick = (bodyColor, elementColor) => {
  document.body.style.background = bodyColor
  document.querySelectorAll(".content").forEach(element => {
    return element.style.background = elementColor;
  });
  const color = {
    bodyColor: bodyColor,
    eleColour: elementColor
  }
  localStorage.setItem("colorChoice", JSON.stringify(color))
}
export const ColorPicker = () => {
  useEffect(() => {
    const userPref = JSON.parse(localStorage.getItem("colorChoice"))
    colorPick(userPref.bodyColor, userPref.eleColour)
  })
  const colorChanger = (e) => {
    if (e.target.getAttribute("name") === "first") {
      colorPick("no-repeat linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)", "#fff")
    }
    else if (e.target.getAttribute("name") === "second") {
      colorPick("no-repeat linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)", "#fff2d2")
    }
    else if (e.target.getAttribute("name") === "third") {
      colorPick("no-repeat linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)", "rgb(201 255 204)")
    }
    else if (e.target.getAttribute("name") === "fourth") {
      colorPick("no-repeat linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)", "rgb(125 203 255)")
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    const colorValue = document.querySelector("#color").value
    const bubbleValue = document.querySelector("#bubbleColor").value
    colorPick(colorValue, bubbleValue)
  }
  return (
    <div>
      <div className="colorPicker">
        <div className="zero" name="zero">Themes</div>
        <div className="first" name="first" onClick={colorChanger}>Theme 1</div>
        <div className="second" name="second" onClickCapture={colorChanger}>Theme 2</div>
        <div className="third" name="third" onClick={colorChanger}>Theme 3</div>
        <div className="fourth" name="fourth" onClick={colorChanger}>Theme 4</div>
        <div className="fifth" name="fifth" onClick={colorChanger}>

          <input type="color" name="color" id="color" />
          <input type="color" name="bubbleColor" id="bubbleColor" />

          <button className="btn" onClick={handleClick}>
            Add
          </button>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
