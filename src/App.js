import Footer from "./components/Footer";
import Navig from "./components/Navig";
import Direction from "./components/Direction";
import Menu from "./components/Menu";
import React, {useState,useEffect} from 'react'

function App() {

  const [isopen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isopen)
  }

  useEffect(() => {
    const hidemenu = () =>{
      if (window.innerWidth > 760 && isopen){
        setOpen(false)
      }
    }
    window.addEventListener('remove menu', hidemenu())
    return () =>{
      window.removeEventListener('menu',hidemenu())
    }
  })

  return (
    <div>
      <Navig toggle={toggle}/>
      <Menu isopen={ isopen } toggle={toggle}/>
      <Direction/>
      <Footer/>
    </div>  
  );
}

export default App;
