import React from 'react'
import '../Checkbox/Checkbox.css';
export default function Checkbox(props) {
    return (
        <input type="checkbox" className='checkbox' onChange={()=>{props.changeTaskState(props.id)}}/>
    )
}
