import React from 'react'
import {useContext} from 'react'
import {LoginContext} from '../contexts/LoginContext'
//import {useState} from 'react'
function Login(){
    const {setName,setProfileinfo}=useContext(LoginContext)
   // const[name,setName]=useState("")
   // const[pwd,setPwd]=useState("")
   // const[profileinfo,setProfileinfo]=useState(false)
   // const show=()=>{
   //     if (name==="M.vinoth" && pwd==="vinoth@123")
  //      setProfileinfo(true)
   //     else
  //      setProfileinfo(false)
  //  }
    return(
        <>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter User Name"/>
            <br></br>
            <input type="password"  placeholder="Enter Password"/>
            <br></br>
            <input type="button" onClick={()=>setProfileinfo(true)}value="Login"/>
            <br></br>
            {/*(profileinfo && "Valid User :"+name+"!") || "Invalid User!!!"*/}

        </>
    )

}
export default Login