import React from 'react';
import s from './Main.module.css';

const Main = (params) => {
  return (
    <div className={s.item}>
      <div className={s.content}>
        <input type="text" placeholder="Entry Landmark Location"></input>
      </div>

    </div>

  );
}

export default Main;
