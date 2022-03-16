import React, { useState } from "react";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import Animation from "./components/Animation";
//import Animation from "./components/Animation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import "./utilits.css";

import {
Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AnimationHome from "./components/AnimationHome";
import AllContacts from "./components/AllContacts";
import Auth from "./Auth/Auth";
import Loader from "./components/Loader";

const App = ()=> {
  
    return(
        <> 
        <Auth>

        
        <Header/>
        <ToastContainer position='top-center'/>
        <Routes>        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/animation" element={<AnimationHome/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
       <Route path="/about" element={<About/>} ></Route>
       <Route path="/photos" element={<Photos/>} ></Route>
       <Route path="/contact" element={<AllContacts/>} ></Route>
       <Route path="/product" element={<Animation/>} ></Route>
      
      
       </Routes>
       </Auth>

       {/* <Animation/> */}

        {/* <Footer/> */}
        
        </>
    );
}
export default App;