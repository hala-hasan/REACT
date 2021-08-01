import React from 'react'
import '../TextInput/TextInput.css';

export default function TextInput(props) {
    return (
            <input  className='taskInput' onChange={props.onTextChange} value={props.value}/>
    )
}
