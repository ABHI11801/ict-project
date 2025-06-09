import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const DataTable = ({data}) => {
    if(!data || data.length===0){
        return (<div>No data</div>)
    }

    const headers = Object.keys(data[0]).slice(1, -1)
    return (
        <div style={{justifySelf:"center",alignItems:"center",width:"80%",backgroundColor:"white",borderRadius:'1vw',marginTop:"5vw"}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((heads)=>(
                                <TableCell key={heads}>{heads}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row,id)=>(
                            <TableRow key={id}>
                                {headers.map((heads)=>(
                                    <TableCell key={heads}>
                                        {row[heads]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable