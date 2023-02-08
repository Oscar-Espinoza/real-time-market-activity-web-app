import React, { useEffect } from 'react';
import './home.css';
import frontImg from '../../crypto.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../../redux/Currencies/currencies';
import { BsTriangleFill } from 'react-icons/bs';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, currencies } = useSelector(state => state.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (loading) {
    return (
      <h1>LOADING...</h1>
    )
  }

  return (
    <div className='container home'>
      <section className="front-img-container">
        <img src={frontImg} alt="popular currencies" className='front-img'/>
        <div className="layer">
          <div className="front-text">
            <div className="text">
              <h2>2023</h2>
              <p>Up to date!</p>
            </div>
            <div className="text">
              <h2>Over 1000</h2>
              <p>Cryptocurrencies</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container stats-container">
        <h2 className='stats-title dark-bg'>All stats</h2>
        <ul className="stats">
          <li className='stat'>
            <h3>1000+</h3>
            <p>Cryptocurrencies</p>
          </li>
          <li className='stat'>
            <h3>100 Mil+</h3>
            <p>Supply</p>
          </li>
          <li className='stat'>Stat 3</li>
          <li className='stat'>Stat 4</li>
          <li className='stat light-bg'>Stat 5</li>
          <li className='stat dark-bg'>Stat 6</li>
        </ul>
      </section>
      <section className="currencies-container">
        <ul className="currencies">
          {currencies.slice(0, 10).map((currency, i) => {
          return (
            <li className='currency' key={currency.name}>
              <div className="currency-text">
                <h3>{currency.symbol}</h3>
                <p>{currency.name}</p>
              </div>
              <div className="change-percent">
                <BsTriangleFill />
              </div>
            </li>
          )
        })}
        </ul>
      </section>
      
    </div>
  );
}

