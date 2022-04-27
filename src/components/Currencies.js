import { useState } from "react";

const Currencies = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="crypto">
      <h1> Search a currency</h1>
      <div>
        <input
          placeholder="Search Currency..." 
          className="searchBtn"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cryptoWrap">
        {data
          .filter((element) => element.name.toLowerCase().includes(search))
          .map((item, id) => (
            <div className="cryptoItem" key = {id}>
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

export default Currencies;
