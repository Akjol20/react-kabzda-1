import React from 'react'
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import AddMessageForm from '../AddMessagesForms/AddMessagesForm';
import Message from './Messages/Message';
const Dialogs = (props) =>{
    let state =props.dialogsPage;

    let dialogsElements = state.dialogs.map( d =><DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements= state.messages.map( m =><Message message={m.message} key={m.id} />);
    let newMessageBody =  state.newMessageBody;
   
    
    
    let addNewMessage = (values) => {
         props.sendMessage(values.newMessageBody);
     }
    
    if(!props.isAuth)return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            
            </div>
            <div className={s.messages}>
               <div>{ messagesElements }</div>     
        </div>
       <AddMessageForm onSubmit={addNewMessage} />
    </div>
    ) 
    }
export default Dialogs;