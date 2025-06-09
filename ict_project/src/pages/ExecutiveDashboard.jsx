import React, { useState } from "react";
import Nav from "../components/Nav";
import CreateLead from "../components/CreateLead";
import DataTable from "../components/DataTable";
import { useEffect } from "react";
import axios from "axios";
import TotalLeads from "../components/TotalLeads";
import ActiveLeads from "../components/ActiveLeads";

const ExecutiveDashboard = () => {
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
            <div style={{borderRadius:"1vw", justifySelf: "center", alignItems: "center", padding:"2vw",backgroundColor:"rgb(174, 174, 175)",boxShadow:"4px 4px 10px 4px rgba(0, 0, 0, 0.3)"}}>
                <div style={{ display: "flex", justifyContent: "space-evenly", justifySelf: "center", alignItems: "center",width:"100%"}}><TotalLeads /><ActiveLeads /></div>
                <br />
                <br />
                <div style={{ display: "flex", justifySelf: "center", alignItems: "center" }}><CreateLead /></div>
                <div><DataTable data={users} /></div>
            </div>
        </>
    );
};

export default ExecutiveDashboard;