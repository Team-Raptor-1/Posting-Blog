import React from 'react';
import './App.css';
import BlogForm from './admin/postblog';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <BlogForm />
      <Footer/>
    </div>
  );
}

export default App;
