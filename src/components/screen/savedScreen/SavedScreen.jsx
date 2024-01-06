import React, { useState, useEffect } from 'react';
import css from './Saved.module.scss'
import { getDataProduct } from '../../../APIs/GetApi';

const SavedScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataProduct()
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error setting data:', error));
  }, []);

  return (
    <div className={`xPaddings ${css.wrapper}`}>
    Saved screens
    <div>
      <h1>Public API Data</h1>
      <ul>
        {data.map((item,i) => {
          return(
            <li key={i}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  </div>)
};

export default SavedScreen;
