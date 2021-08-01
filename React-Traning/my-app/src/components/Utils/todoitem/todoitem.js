import React from 'react'
import './todoitem.css';
export default function todoitem(props) {
    return (
        <div className='todoitem'>
            {props.children}
        </div>
    )
}
