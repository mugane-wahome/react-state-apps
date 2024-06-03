import React,{ useState } from "react"  ;
import{
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Textfield,
    IconButton
} from '@mui/material';
import {Edit,Delete} from '@mui/icons-material';

const DataTable =()=>{

    const [data, setData]=useState([
        { id: 1, name: 'John Doe', gender: 'Male', age: 28 },
        { id: 2, name: 'Jane Smith', gender: 'Female', age: 34 }
    ]);

    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({ id: null, name: '', gender: '', age: '' });

const handleAdd =()=>{
    setData([...data, {...formData, id:data.length+1}]);
    setFormData({ id:null, name:'', gender:'', age:''});
};

const handleDelete =(id)=>{
setData(data.filter(item=>item.id !==id));
};
const handleEdit =(item)=>{
    setIsEditing(item.id);
    setFormData(item);
};
const handleUpdate =(id)=>{
    setData(data.map(item=>(item.id ===id ? formData:item)));
    setIsEditing(null);
    etFormData({ id: null, name: '', gender: '', age: '' });
}

const handleChange =()=>{
    const {name, value} = e.target;
    setFormDta
}

}