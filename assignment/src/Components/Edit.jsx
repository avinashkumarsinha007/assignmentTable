import React, { useState } from "react";
import Button from '@mui/material/Button';
export const Edit = ({ handleSave,id,handleClose }) => {
    const [editedText, setEditedText] = useState("");
    const handleEditText = (e) => {
        setEditedText(e.target.value);
    }
    const handleSaveButton = ()=>{
        let payload = {
            name: editedText,
            id:id
        }
        handleSave(payload);
        setEditedText("")
    }
    return (
        <>
            <input type="text" placeholder="edit" value={editedText} onChange={handleEditText} /><br /><br />
            <Button onClick={handleSaveButton} variant="outlined">Save</Button>
            <Button onClick={handleClose} variant="outlined">Close</Button>

        </>
    )
}