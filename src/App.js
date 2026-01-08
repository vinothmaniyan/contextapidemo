import React from 'react'
import {useState} from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import {LoginContext} from './contexts/LoginContext'
function App(){
  const [name,setName]=useState("")
  const[profileinfo,setProfileinfo]=useState(false)
  return(
    <div>
      <LoginContext.Provider value={{name,setName,setProfileinfo}}>
      {profileinfo ? <Profile /> : <Login />}
      </LoginContext.Provider>
  
    </div>
  )
}
export default App
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
