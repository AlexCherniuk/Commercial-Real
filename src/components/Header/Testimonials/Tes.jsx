import React from 'react';
import s from './Tes.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/testimonials/' + props.id
  return   <div className={s.dialog + ' ' + s.active}>
  <NavLink to={path}>{props.name} </NavLink>
</div>
}

const Message = (props) => {
  return   <div className={s.message}>{props.item}</div>
}


const Tes = (props) => {
  return (
    <div className={s.item}>
      <div className={s.content}>
        <h1>Testimonials</h1>
      </div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <DialogItem name='Dimysh' id='1' />
          <DialogItem name='Yaroo' id='2' />
          <DialogItem name='Karin' id='3' />
          <DialogItem name='Bruse' id='4' />
          <DialogItem name='Egor' id='5' />
          <DialogItem name='Bro' id='6' />
        </div>
        <div className={s.messages}>
         <Message item='Tes1' />
         <Message item='Tes2' />
         <Message item='Tes3' />
         <Message item='Tes4' />
         <Message item='Tes5' />
         <Message item='Tes6' />
        </div>
      </div>

    </div>
  );
}

export default Tes;