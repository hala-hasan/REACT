import React from 'react';
import './App.css';
import Add from './components/Utils/Buttons/AddButton/AddButton';
import TextInput from './components/Utils/TextInput/TextInput';
import Todolist from './components/Todolist/Todolist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
      tasks: [],
      text: '',
    }
  }
  AddButton = (text) => {
    const task = {
      id: this.state.Counter,
      data: text,
      isChecked: false,
    }
    let tasks = this.state.tasks;
     tasks.push(task);
    this.setState({
      tasks: tasks,
      Counter: this.state.Counter + 1,
      text:''
    });
  }
  DeleteTask = (id) => {
    const CurrentState = this.state.tasks;
    let newTask = CurrentState.filter(task => task.id !== id);
    this.setState({ tasks: newTask });
  }

  changeTaskState = (id) => {
    let task = this.state.tasks;
    for (let i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task[i].isChecked = !task[i].isChecked;
        break;
      }
    }
    this.setState({ tasks: task });
  }
  onTextChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }
  onAddButton = () => {
    if (this.state.text.length > 0) {
      this.AddButton(this.state.text);
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='title'>
          <TextInput onTextChange={this.onTextChange}  value={this.state.text}/>
          <Add onAddButton={this.onAddButton} />
        </div>
        <Todolist
          tasks={this.state.tasks}
          changeTaskState={(id) => { this.changeTaskState(id) }}
          DeleteTask={(id) => { this.DeleteTask(id) }}
        />
      </div>
    );
  }
}
export default App;