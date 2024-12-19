import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "./Header";
import SidebarComponent from "./Sidebar";
import axios from "axios";
const Team = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); 
        const response = await axios.get("http://localhost:3300/api/v1/users/all-users", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setRows(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.response ? error.response.data.message : error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const user = JSON.parse(localStorage.getItem("user")); 
      await axios.delete(`http://localhost:3300/api/v1/users/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setRows((prevRows) => prevRows.filter((user) => user._id !== id));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleUpdate = (id) => {
    const userToUpdate = rows.find((user) => user._id === id);
    setSelectedUser(userToUpdate);
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user")); 
      const response = await axios.patch(`http://localhost:3300/api/v1/users/update-user/${selectedUser._id}`, selectedUser, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setRows((prevRows) => prevRows.map((user) => (user._id === response.data.data.user._id ? response.data.data.user : user)));
      setOpen(false);
      setSelectedUser(null);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "lastName", headerName: "Last Name", flex: 1, cellClassName: "color--cell" },
    { field: "email", headerName: "Email", flex: 1, cellClassName: "color--cell" },
    {
      field: "role",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          bgcolor={row.role === "admin" ? "#626464" : row.role === "manager" ? "#3F51B5" : "#4CAF50"}
          borderRadius="4px"
        >
          {row.role === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {row.role === "user" && <LockOpenOutlinedIcon />}
          <Typography color={"#e0e0e0"} sx={{ ml: "5px" }}>
            {row.role}
          </Typography>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleUpdate(row._id)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box display="flex" sx={{ minHeight: "100vh" }}>
      <SidebarComponent />
      <Box flex="1" p="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        {error && <Typography color="error">{error}</Typography>}
        <Box
          m="40px 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .name-column--cell": { color: "#3F51B5" },
            "& .color--cell": { color: "#000000" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#1E293B",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: "#e7ebea" },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": { color: "#3F51B5 !important" },
          }}
        >
          <DataGrid 
            checkboxSelection 
            rows={rows} 
            columns={columns} 
            getRowId={(row) => row._id} // Spécifiez que _id est l'identifiant unique
          />
        </Box>

        {/* Update Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Update User</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={selectedUser?.name || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, name: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              value={selectedUser?.lastName || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={selectedUser?.email || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, email: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rôle"
              value={selectedUser?.role || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, role: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Team;
