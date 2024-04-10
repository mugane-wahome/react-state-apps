import React, { useState } from "react"
import memesData from "../assets/memesData"
import "./meme.css"

export default function Meme() {
  const [memeImage, setMemeImage] = useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
    console.log("Random image is  already rendered")
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button
          className="form--button"
          onClick={getMemeImage}
       
        >
          Get a new meme image 🖼
        </button>
        
      </div>
      <img className="memimage" src={memeImage} alt="here is the meme image" />
    </main>
  )
}