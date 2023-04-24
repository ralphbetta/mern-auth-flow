import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Recovery from "./pages/Recovery"
import Reset from "./pages/Reset";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
   <Router>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path="/profile" element={<Profile/>}></Route>
      <Route exact path="/recovery" element={<Recovery/>}></Route>
      <Route exact path="/reset" element={<Reset/>}></Route>
      <Route exact path="/pagenotfound" element={<PageNotFound/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
