import React, {useEffect, useState} from "react"
import Layout from "./Layout"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
const [employees,setEmployees] = useState('')
const [sector,setSector] =useState(false)
const [showUser,setShowUser] = useState(false)
const [showAdmin,setShowAdmin] = useState(false)

const [a,setA] =useState('');
// useEffect(()=>{
//   var value;
// if(sector === 'true' && value=== 'user'){
// setA('user')
// }
// else if(sector === 'true' && value=== 'admin'){
//  setA('admin')
// }
// else{
// setA('')
// }
// },[sector])
// useEffect(()=>
// {
//   if(showUser === true){
//   setA('user')
//   }
//   if(showAdmin === true){
//   setA('Admin')
//   }
//   else{
//     setA('')
//   }
//   },[showUser, showAdmin])
useEffect(()=>{if(showUser === true){
  setA('user')
  }
  else{
    setA('')
  } 
},[showUser])
  useEffect(()=>{if(showAdmin === true){
      setA('Admin')
      }
      else{
        setA('')
      }
    },[ showAdmin])

  return (
    <>
    <Layout/>
    <div>
      <h1>Generation Thailand</h1>
      <h1>React - Assessment</h1>
    </div>
<div>
<button onClick={()=>setShowUser(true)}>User Home Sector</button>
<button onClick={()=>setShowAdmin(true)}>Admin Home Sector</button>
</div>
{a}
</>

   
  )
}



export default Home
