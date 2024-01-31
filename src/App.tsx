// import CurrencyCard from "./Components/CurrencyCard";

import { useState } from "react";
import { CurrencyCard } from "./Components";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo: any = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  console.log(options);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  function handleConvert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/20037843/pexels-photo-20037843/free-photo-of-compania.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}
          >
            <div className="w-full mb-1">
              <CurrencyCard
                label="from"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(c) => setFrom(c)}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrencyCard
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
