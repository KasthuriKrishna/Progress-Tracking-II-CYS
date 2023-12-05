import { ReactDOM } from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Signupapp from './Signupapp';
import Loginapp from './Loginapp';
import Home from './Home';
import Layout from './Layout';
import Blog from './Blog';
import Contact from './Contact';
const Navigate=()=>{
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Signupapp />} />
              <Route path="/Loginapp" element={<Loginapp />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Layout" element={<Layout />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    )
}
export default Navigate;