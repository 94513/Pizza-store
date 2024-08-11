import Menu from "./Component/Menu";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Servics from "./Component/Servics";
import Home from "./Component/Home";
import Pizza from "./Component/Pizza";
import {Routes , Route } from 'react-router-dom';


function App(){
  return(
    <>
    <Menu/>


    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Pizza" element={<Pizza/>}/>
      <Route path="/servics" element={<Servics/>}/>
      <Route path="/Contact Us" element={<Contact Us/>}/>
    </Routes>

    


    <Footer/>
      </>
  )
}
export default App;