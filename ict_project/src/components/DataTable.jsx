import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DataTable = ({ data, showButtons = false }) => {
    if (!data || data.length === 0) {
        return (<div>No data</div>)
    }

    const navigate = useNavigate()
    const updateEmp = (row) => {
        navigate('/UserDetails', { state: { userData: row } });
        console.log(row)
    }
    const deleteEmp = (row) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        axios.delete(`http://localhost:5000/deleteUser/${row._id}`)
        .then((res)=>{
            console.log(res)
            window.alert("User deleted successfully!");
            window.location.reload()
        })
        .catch((res)=>{
            console.log(res)
        })
    }

    const headers = Object.keys(data[0]).slice(1, -1)
    return (
        <div style={{ justifySelf: "center", alignItems: "center", width: "80%", backgroundColor: "white", borderRadius: '1vw', marginTop: "5vw" }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((heads) => (
                                <TableCell key={heads}>{heads}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, id) => (
                            <TableRow key={id}>
                                {headers.map((heads) => (
                                    <TableCell key={heads}>
                                        {row[heads]}
                                    </TableCell>
                                ))}
                                {showButtons && (
                                    <>
                                        <TableCell><Button onClick={() => { updateEmp(row) }}>UPDATE</Button></TableCell>
                                        <TableCell><Button onClick={() => { deleteEmp(row) }}>DELETE</Button></TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable