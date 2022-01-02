import React from "react";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
//import Animation from "./components/Animation";

import "./index.css";
import "./utilits.css";

import {
Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = ()=> {
    return(
        <> 
        <Header/>
        <Routes>        
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
       <Route path="/about" element={<About/>} ></Route>
       <Route path="/photos" element={<Photos/>} ></Route>
       <Route path="/contact" element={<Contact/>} ></Route>
      
      
       </Routes>

       {/* <Animation/> */}

        {/* <Footer/> */}
        
        </>
    );
}
export default App;