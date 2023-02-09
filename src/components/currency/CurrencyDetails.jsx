import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CurrencyDetails() {
  const { currencyName } = useParams();
  const currency = useSelector(state => state.currencies.currencies.find(currency => currency.name === currencyName));
  return (
    <div className='currency-detail'>
      <h2>{currency.name} ({currency.symbol})</h2>
      <p>Rank: {currency.rank}</p>
      <p>Supply: {currency.supply}</p>
      <p>Max Supply: {currency.maxSupply}</p>
      <p>Market Cap (USD): {currency.marketCapUsd}</p>
      <p>
        Change (24hr): 
        {currency.changePercent24Hr[0] === '-'
          ? currency.changePercent24Hr.slice(0, 5)
          : `+ ${currency.changePercent24Hr.slice(0, 4)}`}%
        <BsTriangleFill
          className={currency.changePercent24Hr[0] !== '-'
            ? 'positive-per'
            : 'negative-per'
          }
        />
      </p>
    </div>
  );
};

