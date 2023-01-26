// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const Profile = () => {
//   const [name,setName]= useState()
//   const [name2,setName2]= useState()
//   const navigate = useNavigate()

//   const Name1=(event)=>{
//     setName (event.target.value)
//   }
//   const Name2=(event)=>{
//     setName2 (event.target.value)
//   }
//   function Clik(){
    
//     navigate ('./login')
//   }


//   return (
//     <div>
//     <h1>Profile Info</h1>
//     <h2>Name :</h2>    
//     <h2>Age :</h2>    
//     <h2>Email :</h2>  

//     <input type={'text'} onChange={(event)=>Name1(event)}></input>
//     <input type={'text'} onChange={(event)=>Name2(event)}></input>
//     <button onChange={Clik()}>click</button>
//     <h1>{name}</h1>
//     <h1>{name2}</h1>
//     </div>
//   )
// }

// export default Profile