import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import PassPopUp from "./PassPopUp"
import { useState } from "react"

const DataTable = ({ data, showButtons = false, showPass = false }) => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  if (!data || data.length === 0) {
    return (
      <Paper
        elevation={2}
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No data available
        </Typography>
      </Paper>
    )
  }

  const updateEmp = (row) => {
    navigate("/UserDetails", { state: { userData: row } })
    console.log(row)
  }

  const deleteEmp = (row) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?")
    if (!confirmDelete) return

    axios
      .delete(`http://localhost:5000/deleteUser/${row._id}`)
      .then((res) => {
        console.log(res)
        window.alert("User deleted successfully!")
        window.location.reload()
      })
      .catch((res) => {
        console.log(res)
      })
  }

  const headers = Object.keys(data[0]).slice(1, -1)

  return (
    <Box sx={{ width: "100%", maxWidth: "95%", mx: "auto", mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          background: "white",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                {headers.map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#2c3e50",
                      textTransform: "capitalize",
                      borderBottom: "2px solid #e9ecef",
                    }}
                  >
                    {header.replace(/([A-Z])/g, " $1").trim()}
                  </TableCell>
                ))}
                {showButtons && (
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#2c3e50",
                      borderBottom: "2px solid #e9ecef",
                    }}
                  >
                    Actions
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, id) => (
                <TableRow
                  key={id}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "#fafbfc",
                    },
                    "&:hover": {
                      backgroundColor: "#f1f3f4",
                      transform: "scale(1.001)",
                      transition: "all 0.2s ease",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {headers.map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        fontSize: "0.9rem",
                        color: "#495057",
                        borderBottom: "1px solid #f1f3f4",
                      }}
                    >
                      {typeof row[header] === "boolean" ? (
                        <Chip
                          label={row[header] ? "Active" : "Inactive"}
                          color={row[header] ? "success" : "default"}
                          size="small"
                          variant="outlined"
                        />
                      ) : (
                        row[header]
                      )}
                    </TableCell>
                  ))}
                  {showButtons && (
                    <TableCell sx={{ borderBottom: "1px solid #f1f3f4" }}>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Tooltip title="Edit User">
                          <IconButton
                            onClick={() => updateEmp(row)}
                            size="small"
                            sx={{
                              color: "#3498db",
                              "&:hover": {
                                backgroundColor: "rgba(52, 152, 219, 0.1)",
                              },
                            }}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete User">
                          <IconButton
                            onClick={() => deleteEmp(row)}
                            size="small"
                            sx={{
                              color: "#e74c3c",
                              "&:hover": {
                                backgroundColor: "rgba(231, 76, 60, 0.1)",
                              },
                            }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  )}
                  {showPass && (
                    <Button onClick={() => { setSelectedRow(row); setShowPopup(true) }}>PASS</Button>
                  )}
                  {selectedRow && (
                    <PassPopUp
                      open={!!selectedRow}
                      onClose={() => setSelectedRow(null)}
                      id={selectedRow._id}
                      leadid={selectedRow.LeadId}
                      team={selectedRow.CurrentTeam}
                    />
                  )}

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default DataTable
