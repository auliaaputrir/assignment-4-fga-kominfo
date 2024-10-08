import { useEffect, useState } from 'react'
import './App.css'
import { fetchRates } from './api'

function App() {
  const [fetchRatesResult, setFetchRatesResult] = useState(null)
  const currencyList = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"];
  useEffect(() => {
    const getRates = async () => {
      const result = await fetchRates(); 
      setFetchRatesResult(result); 
    };

    getRates(); 
  }, []);
  const calculateRateBuy = (rate) => {
    return (parseFloat(rate) * 1.02).toFixed(4);
  };

  const calculateRateSell = (rate) => {
    return (parseFloat(rate) * 0.98).toFixed(4);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-orange-500'>
      {fetchRatesResult ? (
        <table className='table-auto text-white text-center'>
          <thead className='text-xl'>
              <th className="px-4 py-2 border-b-2"></th>
              <th className=" px-6 py-2 border-b-2">WE BUY</th>
              <th className="px-4 py-2 border-b-2">EXCHANGE RATE</th>
              <th className="px-4 py-2 border-b-2">WE SELL</th>
          </thead>
          <tbody className='text-lg'>
            {currencyList.map((currency, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-0">{currency}</td>
                <td className="px-4 py-2 border-0">{calculateRateBuy(fetchRatesResult.rates[currency])}</td>
                <td className="px-4 py-2 border-0"> {Number(fetchRatesResult.rates[currency]).toFixed(4)}</td>
                <td className="px-4 py-2 border-0">{calculateRateSell(fetchRatesResult.rates[currency])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-2xl text-white'>Loading...</p>
      )}
    </div>
  );

}

export default App
