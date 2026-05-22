import List from "@mui/material/List";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


//this is a function for fetching data from local storage
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("toDoList"));
  if (!data) return [];
  return data;
};
export default function TodoList() {
  const [toDoList, setToDoList] = useState(getInitialData);
  //here we save under local storage some data on window start
  //so every time we add a todo item this add it to local storage (update the list)
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);
  const deleteFunc = (id) =>
    setToDoList((prev) => prev.filter((e) => e.id !== id));
  const updateFunc = (id) =>
    setToDoList((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );

  const addTodo = (text) => {
    setToDoList((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        <Typography variant="h2" component="h6" sx={{ flexGrow: 1 }}>
            To do list
          </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {toDoList.map((value) => {
            return (
              <ToDoItem
                text={value.text}
                completed={value.completed}
                updateFunc={() => updateFunc(value.id)}
                deleteFunc={() => deleteFunc(value.id)}
              />
            );
          })}
          <ToDoForm addTodo={addTodo} />
        </List>
      </Box>
    </>
  );
}
