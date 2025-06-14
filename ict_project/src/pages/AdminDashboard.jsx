import React from 'react'
import DataTable from '../components/DataTable'
import TotalLeads from '../components/TotalLeads'
import ActiveLeads from '../components/ActiveLeads'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import BarGraph from '../components/BarGraph'
import CreateUser from '../components/CreateUser'
import AddTeam from '../components/AddTeam'

const AdminDashboard = () => {
  const [users,setUsers] = useState([])
  const [leads,setLeads] = useState([])
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
      axios.get('http://localhost:5000/view')
        .then((res)=>{setUsers(res.data)})
        .catch((err)=>{console.error(err)})

      axios.get(`http://localhost:5000/viewleads`)
            .then((res) => { setLeads(res.data) })
            .catch((err) => { console.error(err) })
    }
  return (
    <>
        <Nav/>
        <div style={{display:"flex",justifyContent:"space-evenly",justifySelf:"center",alignItems:"center",width:"80%"}}><TotalLeads/><ActiveLeads/></div>
        <br/>
        <div style={{maxWidth:"50vw",display:"flex",justifySelf:"center",backgroundColor:"white"}}><BarGraph/><AddTeam/></div>
        <br/>
        <div style={{display:"flex",justifySelf:"center",alignItems:"center"}}><CreateUser/></div>
        <div><DataTable data={users} showButtons={true}/></div>
        <br/>
        <div><DataTable data={leads}/></div>
        <br/>
        <br/>
        
    </>
  );
}

export default AdminDashboard