import React, { useState } from 'react'
import { firestore } from '../firebase/clientApp'
import { collection, addDoc } from 'firebase/firestore'
import moment from 'moment'
import { getAuth } from 'firebase/auth'

const AddTodo = ({closeShowForm, show} : any) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const auth = getAuth()
    const uid = auth.currentUser ? auth.currentUser.uid : ''

    const handleAdd = async () => {
        
        const newTodo = {
            title,
            description,
            uid,
            done: false,
            timestamp: moment.utc().unix()
        }
        await addDoc(collection(firestore, 'todos'),newTodo)
        setTitle('')
        setDescription('')
    }

    return (
        <div className={`add-todo-wrap ${show ? 'show' : ''}`}>
            <div className='add-todo'>
                <h2>
                    New Todo
                </h2>
                <input type="text" placeholder='Todo Name' required  
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                />
                <textarea placeholder='Todo Description' 
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                />
                <button onClick={handleAdd}>
                    Add
                </button>
            </div>
            <button 
                onClick={closeShowForm}
                className='absolute right-10 top-10 text-white text-3xl'
            >
                X
            </button>
        </div>
    )
}

export default AddTodo