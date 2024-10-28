import React from 'react';

export default function App() {
    const [initialBalance, setInitialBalance] = React.useState(0);
    const [dailyDeposit, setDailyDeposit] = React.useState(0);
    const [days, setDays] = React.useState(0);
    const [result, setResult] = React.useState(null);
    const [status, setStatus] = React.useState("");

    const calculateDelays = () => {
        let balance = parseFloat(initialBalance);
        let delays = 0;

        for (let i = 0; i < days; i++) {
            balance += parseFloat(dailyDeposit);
            if (!Number.isInteger(balance)) {
                delays++;
            }
        }

        setResult(delays);
        if (Number.isInteger(balance)) {
            setStatus("Saldo é um número inteiro! Hugo não se atrasará.");
        } else {
            setStatus("Saldo não é um número inteiro! Hugo se atrasará.");
        }
    };

    return (
        <div className="container">
            <h1>Hugo e os Donuts</h1>
            <input 
                type="number" 
                placeholder="Saldo Inicial (R$)" 
                value={initialBalance} 
                onChange={(e) => setInitialBalance(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Depósito Diário (R$)" 
                value={dailyDeposit} 
                onChange={(e) => setDailyDeposit(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Número de Dias" 
                value={days} 
                onChange={(e) => setDays(e.target.value)}
            />
            <button onClick={calculateDelays}>Calcular Atrasos</button>

            {result !== null && (
                <div className="result">
                    Hugo se atrasará para o trabalho <strong>{result}</strong> vezes nos próximos {days} dias.
                </div>
            )}
            {status && (
                <div className={`result ${Number.isInteger(parseFloat(initialBalance) + dailyDeposit * days) ? "green" : "red"}`}>
                    {status}
                </div>
            )}
        </div>
    );
}