import React from 'react'
import {useContext} from 'react'
import {LoginContext} from '../contexts/LoginContext'
//import {useState} from 'react'
function Login(){
    const{name,setName,pwd,setPwd,profileinfo,setProfileinfo}=useContext(LoginContext)
   // const[name,setName]=useState("")
   // const[pwd,setPwd]=useState("")
   // const[profileinfo,setProfileinfo]=useState(false)
   const show=()=>{
       if (name==="M.Vinoth" && pwd==="vinoth@123")
       setProfileinfo(true)
        else
       setProfileinfo(false)  }
    return(
        <>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter User Name"/>
            <br></br>
            <input type="password" onChange={(e)=>setPwd(e.target.value)} placeholder="Enter Password"/>
            <br></br>
            <input type="button" onClick={()=>show()}value="Login"/>
            <br></br>

            {profileinfo===false && <font color="red">Invalid User!!!</font>}

        </>
        )
}
export default Login