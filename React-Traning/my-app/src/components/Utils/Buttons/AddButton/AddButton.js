import React from 'react'
import '../AddButton/AddButton.css';
export default function Add(props) {
    return (
        <div className='Add' onClick={props.onAddButton}>
                <p className='AddText'>AddTask</p>
        </div>
    )
}
