import { useState } from "react";
import { InputBox } from "./assets/components";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function AppNew() {
    const [amount,setAmount] = useState(0);
    const [from,setFrom] = useState("usd");
    const [to,setTo] = useState("inr");
    const [convertedAmount,setConvertedAmount] = useState(0);
    const currencyInfoFrom = useCurrencyInfo(from);
    const option = Object.keys(currencyInfoFrom || {});
    const swap = () => {
        const tempAmount = amount;
        setAmount(convertedAmount);
        setConvertedAmount(tempAmount);
        setFrom(to);
        setTo(from);
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfoFrom[to]);
    }
    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center space-y-4">
                <InputBox 
                    label="From"
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency)=>setAmount(0) || setFrom(currency)}
                    currencyOption={option}
                    selectCurrency={from}  
                />
                <InputBox 
                    label="To"
                    amount={convertedAmount}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    currencyOption={option}
                    selectCurrency={to}
                    amountDisabled
                />
                <div className="flex gap-4">
                    <button onClick={convert} className="bg-blue-500 text-white px-4 py-1 rounded">Convert</button>
                    <button onClick={swap} className="bg-blue-500 text-white px-4 py-1 rounded">Swap</button>
                </div>
            </form>
        </>
    );
}

export default AppNew;