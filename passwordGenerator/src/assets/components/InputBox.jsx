import React, { useId } from "react";
function InputBox({ 
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const amountInputId = useId();
  return (
    <>
        <label htmlFor={amountInputId} className="block text-sm font-medium text-gray-700">{label}</label>
        <input 
            id={amountInputId}
            type="number"
            placeholder="Amount"
            disabled={amountDisabled}
            className={`border border-gray-300 p-1 ${className}`}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select 
            disabled={currencyDisabled}
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            className={`border border-gray-300 p-1 ${className}`}
        >
            {currencyOption.map((currency)=>(
                <option key={currency} value={currency}>{currency.toUpperCase()}</option>
            ))}
        </select>
    </>
  );
}

export default InputBox;
