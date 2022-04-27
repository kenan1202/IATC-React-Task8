import { useState } from "react";

const CryptoCurrencies = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="crypto">
      <h1> Search a currency</h1>
      <div>
        <input
          placeholder="Search" 
          className="search-bttn"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="crypto-wrapper">
        {data
          .filter((element) => element.name.toLowerCase().includes(search))
          .map((item) => (
            <div className="crypto-item">
              <img src={item.image} alt = "Item Image"/>
              <h3>{item.name}</h3>
              <div>{item.symbol}</div>
              <div>{item.current_price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
