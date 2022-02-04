import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

// ReactDOM.render()
export default function App() {
  const [darkMode,setDarkMode]=React.useState(false)
  function toggleDarkMode()
  {
    setDarkMode((prevState)=>!prevState);
  }
  return (
    <div className="light-container">
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}
