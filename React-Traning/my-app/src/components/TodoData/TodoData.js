import React from 'react'
import Delete from '../Utils/Buttons/DeleteButton/DeleteButton';
import Checkbox from '../Utils/Checkbox/Checkbox';
import todoitem from '../Utils/todoitem/todoitem';
import './TodoData.css';
export default function TodoData(props) {
    return (
        <div className='todoData'>
            <div className='main-data'>
                <todoitem>
                    <Checkbox changeTaskState={props.changeTaskState} id={props.id}/>
                        {props.isChecked ? <strike>{props.data}</strike> : <p>{props.data}</p>}
                </todoitem>
                <Delete removeTask={props.removeTask} id={props.id}/>
            </div>
            {!props.lastChild && <hr />}
        </div>
    )
}
