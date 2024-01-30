// api: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/currencies.json

import { useId } from "react";

function CurrencyCard({
  label = "",
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const currencyId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 " htmlFor="currencyId">
          {label}
        </label>
        <input
          id="currencyId"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p>{selectCurrency}</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyCard;
