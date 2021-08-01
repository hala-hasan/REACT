import React from 'react'
import './DeleteButton.css';

export default function Delete(props) {
    return (
        <div className='remove' onClick={()=>{props.removeTask(props.id)}}>
            Delete
        </div>
    )
}
