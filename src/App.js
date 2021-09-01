import './App.css';
import Interior from './Interior.js';
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = (event) => {
    setMenu(!menu);
  };

  if (menu) {
    document.getElementById("html").style.overflow = "hidden";
  }else {
    document.getElementById("html").style.overflow = "scroll";

  }
  return (
 <Interior menu={menu} handleMenuClick={handleMenuClick}/>
  );
}

export default App;
