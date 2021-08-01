import React from 'react'
import './Todolist.css';
import TodoData from '../TodoData/TodoData.js';
export default function Todolist(props) {
    return (
        <div className='todolist'>
            <h1 className='tdoTitle'>Todo List</h1>
            <div className='data'>
                {props.tasks.map((task) => {
                    return (<TodoData
                        key={task.id}
                        data={task.data}
                        isChecked={task.isChecked}
                        id={task.id}
                        changeTaskState={props.changeTaskState}
                        removeTask={props.removeTask}
                    />);
                })}
            </div>
        </div>
    )
}
