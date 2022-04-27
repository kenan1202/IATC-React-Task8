import { createContext, useEffect, useState } from "react";


export const CurrencyContext = createContext();

const CurrencyProvider = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
          .then((res) => res.json())
          .then((info) => setData(info));
      }, []);

    return (
        <CurrencyContext.Provider value = {{ data }}>
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider;