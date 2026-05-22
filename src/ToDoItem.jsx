import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ToDoItem({text, completed, updateFunc, deleteFunc}){

    return(
        <ListItem
              key={0}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={deleteFunc}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton onClick={updateFunc}>
                <ListItemIcon>
                  <Checkbox checked={completed} />
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
    );
}