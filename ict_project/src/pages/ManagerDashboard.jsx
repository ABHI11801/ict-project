import React from 'react'
import DataTable from '../components/DataTable'
import CreateLead from '../components/CreateLead'
import TotalLeads from '../components/TotalLeads'
import ActiveLeads from '../components/ActiveLeads'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from '../components/Nav'

const ManagerDashboard = () => {
  const [users, setUsers] = useState([])
  const team = localStorage.getItem("team")

  useEffect(() => {
    axios.get(`http://localhost:5000/viewleads/${team}`)
      .then((res) => { setUsers(res.data) })
      .catch((err) => { console.error(err) })
  }, [])
  return (
    <>
      <Nav />
      <div style={{ display: "flex", justifyContent: "space-evenly", justifySelf: "center", alignItems: "center", width: "80%" }}><TotalLeads /><ActiveLeads /></div>
      <br />
      <br />
      <div style={{ display: "flex", justifySelf: "center", alignItems: "center" }}><CreateLead /></div>
      <div><DataTable data={users} /></div>
    </>
  );
}

export default ManagerDashboard