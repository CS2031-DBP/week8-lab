import './App.css'
import CourseList from './components/CourseList'
import Navbar from './components/Navbar'
import Register from './components/Register'
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

