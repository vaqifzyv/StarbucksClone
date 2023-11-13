import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainFirst from "./components/MainFirst";
import MainSecond from "./components/MainSecond";
import MainThird from "./components/MainThird";
import MainFourth from "./components/MainFourth";
import MainFifth from "./components/MainFifth";
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <MainFirst />
      <MainSecond />
      <MainThird />
      <MainFourth />
      <MainFifth />
      <TextSection />
      <Footer />
    </>
  );
}

export default App;
