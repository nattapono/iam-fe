import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/css/App.css'
import './assets/css/tiny-slider.css'
import './assets/css/bootstrap-icons.css'
import { BrowserRouter , NavLink, Routes, Route, Navigate} from 'react-router-dom'

//Pages
import Home from './views/Home'
import About from './views/About'
import Header from './components/template/Header'
import Contact from './views/Contact'
import Dashboard from './views/Dashboard'
import Login from './views/login'
import Register from './views/Register'
import Error from './views/Error'

function route() {
  const [loggedIn, setLoggedIn] = useState(null)
  function handleLogIn(){
    setLoggedIn(true)
  }
  function handleLogOut(){
    setLoggedIn(false)
  }
  let activeClassName = "nav-active"
  const AuthTokenKey = "X-Token";
  const authToken = window.localStorage.getItem(AuthTokenKey);
  if (authToken) {
    return (
      <BrowserRouter>
        <Header />
        {/* <nav>
          <NavLink end to="/" className={({isActive})=>isActive ? activeClassName : undefined}>Home</NavLink> 
          <NavLink to="/About"  className={({isActive})=>isActive ? activeClassName : undefined}>About</NavLink> 
          <NavLink to="/Contact"  className={({isActive})=>isActive ? activeClassName : undefined}>Contact</NavLink> 
          <NavLink to="/Dashboard">Dashboard</NavLink> 
        </nav> */}
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/Dashboard"/> : <Home login={handleLogIn} />} />
          <Route path="/login" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={loggedIn ? <Dashboard logout={handleLogOut} /> : <Navigate to="/" state={"Text from Dashboard"} />} /> */}
          
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default route
