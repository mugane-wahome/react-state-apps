import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [isGoingOut, setIsGoingOut]=useState(true)

function changeMind(){
  setIsGoingOut(prevState=>!prevState)

}
  return (
    <>
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
          
                <h1>{isGoingOut ? "Yes" : "No" }</h1>
            </div>
        </div>
    
    </>
  )
}

export default App
