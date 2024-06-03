import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DataTable from './DataTable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Data Table</h1>
      <DataTable />
    </div>
    </>
  )
}

export default App
