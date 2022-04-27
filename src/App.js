import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar";
import Home from "./components/Home"
import CryptoCurrencies from "./components/Currencies";
import Trend from "./components/TrendPage";
import { Routes, Route } from "react-router-dom";



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="crypto" element={<CryptoCurrencies data={data} />} />
        <Route path="trend" element={<Trend />} />
      </Routes>
    </div>
  );
}

export default App;