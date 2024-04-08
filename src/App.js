
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Note from './pages/Note/note';
import About from './pages/about/about';
import Contact from './pages/content/contact';
import Register from './pages/register/register'
import Login from './components/Login/Login';
import Todo from './pages/todo/todo';
import TodoEdit from './pages/todoedit/todoedit';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path ="/about" element={<About/>}/>
        <Route path ="/note" element={<Note/>}/>
        <Route path ="/content" element={<Contact/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/todoedit" element={<TodoEdit/>} />
    </Routes>
  );
};

export default App;


