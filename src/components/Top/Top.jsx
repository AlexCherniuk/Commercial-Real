import React from 'react';
import s from './Top.module.css';

const Top = (params) => {
  return (
    <div className={s.topcontent}>
      <div className={s.topleft}>number and post</div>
      <div className={s.topright}>socials</div>
    </div>

  )
}

export default Top;
