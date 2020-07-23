import React from 'react';
import s from './Tes.module.css';
import { NavLink } from 'react-router-dom';

const Dialogitem = (props) => {
  let path = '/testimonials/' + props.id
  return   <div className={s.dialog + ' ' + s.active}>
  <NavLink to={path}>{props.name} </NavLink>
</div>
}

const Message = (props) => {
  return   <div className={s.message}>{props.item}</div>
}

let dialogsArray = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Yaroo'},
  {id: 3, name: 'Karin'},
  {id: 4, name: 'Bruse'},
  {id: 5, name: 'Egor'},
  {id: 6, name: 'Bro'},
];

let messagesArray = [
  {item: 'Tes1'},
  {item: 'Tes2'},
  {item: 'Tes3'},
  {item: 'Tes4'},
  {item: 'Tes5'},
  {item: 'Tes6'},
];

let dialogs = dialogsArray.map(d => <Dialogitem name={d.name} id={d.id} /> ); 
let messages = messagesArray.map(m => <Message item={m.item} />);

const Tes = (props) => {
  return (
    <div className={s.item}>
      <div className={s.content}>
        <h1>Testimonials</h1>
      </div>
      <div className={s.dialogs}>
        <div className={s.dialogsitem}>
        {dialogs}       
        </div>
        <div className={s.messages}>
        {messages}

        </div>
      </div>
 
    </div>
  );
}

export default Tes;