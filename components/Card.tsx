import React from 'react';
import { doc, DocumentData, updateDoc, deleteDoc } from 'firebase/firestore'
import { firestore } from '../firebase/clientApp';
import moment from 'moment';


const Card = ({todo} : DocumentData) => {
    
    const handleDone = async () => {
        const todoRef = await doc(firestore, 'todos', todo.id)
        await updateDoc(todoRef, {
            done: !todo.data().done
        })
    }

    const handleDelete = async () => {
        const todoRef = await doc(firestore, 'todos', todo.id)
        await deleteDoc(todoRef)
    }

  return (
    <div className='card'>
        <div className='card-top'>
            <h3>{todo.data().title}</h3>
            <h5 className='text-black'>
                {moment(todo.data().timestamp * 1000).format('DD.MM.YYYY HH:mm')}
            </h5>
            <p>
                {todo.data().description}
            </p>
        </div>
        <div className='card-bottom'>
            <button 
                onClick={handleDone}    
                className={`card-done-btn ${todo.data().done ? 'done' : ''}`}>
                    Done
            </button>
            <button 
                className='card-delete-btn'
                onClick={handleDelete}
            >
                Delete</button>
        </div>
  </div>
  )
};

export default Card;
