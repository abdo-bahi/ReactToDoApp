import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Margin } from "@mui/icons-material";


export default function ToDoForm({ addTodo }) {
  const [text, setText] = useState("");
  const hundelChange = (e) => {
    setText(e.target.value);
  };
  return (
    <ListItem>
     
        <TextField
          id="filled-basic"
          label="Add To Do"
          variant="filled"
          onChange={hundelChange}
          value={text}
        />
       <Button sx={{marginLeft:1}} variant="contained" color="primary" onClick={(e) => {
          console.log("from todo foooorm");
          addTodo(text);
          setText("");
        }}>
          Add
        </Button> 

    </ListItem>
  );
}
