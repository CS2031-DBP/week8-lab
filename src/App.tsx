import './App.css'
import CourseList from './components/CourseList'
import Navbar from './components/Navbar'
import Register from './components/Register'

function App() {
  let isRegistered: boolean = true;

  return (
    <>
      <Navbar />

      {isRegistered ? (
        <CourseList />
      ) : (
        <Register />
      )}
    </>
  )
}

export default App

