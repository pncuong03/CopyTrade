import React from "react";
import "./App.css";
import Home from "./Components/Page/Home";
import Footer from "./Components/Page/Footer";
import Crypto from "./Components/Page/Crypto";
import Manage from "./Components/Page/Manage";
import { Partner } from "./Components/Page/Partner";
import { Winwin } from "./Components/Page/Winwin";
import { Header } from "./Components/Page/Header/Header";
import { Features } from "./Components/Page/Features";
import Start from "./Components/Page/Start";
import { Buy } from "./Components/Page/Buy";

function App() {
  return (
    <div >
      <Header/>
      <Home />
      <Manage />
      <Crypto />
      <Start />
      <Features />   
      <Buy/>
      <Partner />

        <Winwin />
    
      <Footer />
    </div>
  );
}

export default App;
