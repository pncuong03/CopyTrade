import React from "react";
import "./App.css";
import Home from "./Components/Page/Home";
import Footer from "./Components/Page/Footer";
import Crypto from "./Components/Page/Crypto";
import Manage from "./Components/Page/Manage";

function App() {
  return (
    <div className="max-w-[1920px] px-2">
      <Home />
      <Manage/>
      <Crypto/>
      <Footer/>
    </div>
  );
}

export default App;
