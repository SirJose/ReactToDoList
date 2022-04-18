import React from "react";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import ToDoForm from "./components/to-do-form";
import ToDoList from "./components/to-do-list";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ToDoForm></ToDoForm>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
