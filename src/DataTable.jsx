// src/DataTable.jsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  Switch,
  FormControlLabel
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import './DataTable.css'; // Import the CSS file

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', gender: 'Male', age: 28 },
    { id: 2, name: 'Jane Smith', gender: 'Female', age: 34 }
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({ id: null, name: '', gender: '', age: '' });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAdd = () => {
    setData([...data, { ...formData, id: data.length + 1 }]);
    setFormData({ id: null, name: '', gender: '', age: '' });
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setFormData(item);
  };

  const handleUpdate = () => {
    setData(data.map(item => (item.id === formData.id ? formData : item)));
    setIsEditing(null);
    setFormData({ id: null, name: '', gender: '', age: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
        label="Dark Mode"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(item)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  placeholder="Gender"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
              </TableCell>
              <TableCell>
                {isEditing ? (
                  <Button onClick={handleUpdate}>Update</Button>
                ) : (
                  <Button onClick={handleAdd}>Add</Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
