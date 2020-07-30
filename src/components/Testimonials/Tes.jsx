import React from 'react';
import s from './Tes.module.css';
import { NavLink } from 'react-router-dom';

const Dialogitem = (props) => {
  let path = '/testimonials/' + props.id
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name} </NavLink>
  </div>
}


const Message = (props) => {
  return <div className={s.message}>{props.item}</div>
}



const Tes = (props) => {


  let dialogs = props.dialogsArray.map(d => <Dialogitem name={d.name} id={d.id} />);
  let messages = props.messagesArray.map(m => <Message item={m.item} />);

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
