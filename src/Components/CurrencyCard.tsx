// api: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/currencies.json

import { useId } from "react";

interface CurrencyCardProps {
  label?: string;
  className?: string;
  amount: number;
  onAmountChange?: (newAmount: number) => void;
  onCurrencyChange: (newCurrency: string) => void;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisabled?: boolean;
  currencyDisabled?: boolean;
}

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
}: CurrencyCardProps) {
  const currencyId = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex justify-between items-center ${className}`}
    >
      <div className="w-1/2">
        <label className="text-black/40 mb-2 " htmlFor={currencyId}>
          {label}
        </label>
        <input
          id={currencyId}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/4 flex flex-col text-right self-end">
        <p>Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyCard;
