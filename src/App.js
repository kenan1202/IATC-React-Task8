import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar";
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom";
import Currencies from "./components/Currencies";
import TrendPage from "./components/TrendPage";
import { CurrencyContext } from './context/CurrencyContext';



function App() {

  const { data } = useContext(CurrencyContext);

  if(data) {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="crypto" element={<Currencies data={data} />} />
          <Route path="trend" element={<TrendPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;