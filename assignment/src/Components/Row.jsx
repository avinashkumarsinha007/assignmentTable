import React from "react";
import Button from '@mui/material/Button';
import { Edit } from "./Edit";

export const Row = ({item,handleSave,handleDelete}) => {
    const [edit, setEdit] = React.useState(false);
    
    const handleEdit = () => {
        setEdit(true);
    }
    const handleClose = () => {
        setEdit(false);
   }
    return (      
            <div style={{display:"flex",verticalAlign:"center",margin:"auto",width:"80vw",marginTop:"2vh",justifyContent:"space-around"}}>
            <div ><img src={item.avatar} alt="profile pic"/></div>
            <div >{item.email}</div>
            <div >{item.first_name}</div>
            <div >{item.last_name}</div>
            <div><Button onClick={() => handleDelete(item.id)} variant="outlined"> Delete </Button>  </div>
            <div>
            {
                edit ?
                    <Edit  handleEdit={handleEdit} handleSave={handleSave} handleClose={handleClose} id={item.id} />
                    :null
            }
            {
                edit ? null :<Button onClick={() => handleEdit()} variant="outlined">Edit</Button>
            }
            </div>
            </div>       
    )
}