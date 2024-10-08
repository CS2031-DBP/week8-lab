import './App.css'
import { useState } from 'react'
import CourseList from './components/CourseList'
import Navbar from './components/Navbar'
import Register from './components/Register'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Navbar />
      <button onClick={handleClick}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible ? <CourseList /> : <Register />}
    </>
  )
}

export default App

