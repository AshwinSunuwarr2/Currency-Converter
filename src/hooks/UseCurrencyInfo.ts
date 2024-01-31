import {useState, useEffect} from "react";


function useCurrencyInfo(currency: any) {
    const [data, setData] = useState({})

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log("API data listed inside effect:", JSON.stringify(data))
  }, [currency]);
  console.log(`apis data listed: ${data}`)
  return data
}

export default useCurrencyInfo;
