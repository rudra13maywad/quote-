import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setusers] = useState([])
   useEffect(()=>{
     axios
         .get("https://api.github.com/users")
         .then((res)=>{
           setusers(res.data)
         })
         .catch((err)=>{
           console.log(err)
         })
   } ,[])
  return (
     <>
         <h1 className="head">
             GITHUB USERS API
         </h1>
     <div className="main-div">

       {
         users.map((current)=>{
           return(
               <div className="singleuser" key={current.id}>
                 <img src={current.avatar_url} alt={current.login} className="img"/>
                 <h2 className="name">{current.login}</h2>
           </div>)
         })
       }
     </div>
     </>



  )
}

export default App
