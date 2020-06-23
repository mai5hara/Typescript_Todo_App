import React, { useState } from 'react';
import { Task } from '../Types';

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskInput: React.FC<Props> = ({ tasks, setTasks }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [count, setCount] = useState(tasks.length + 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    setCount(count + 1)

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    }

    setTasks([newTask, ...tasks])
    setInputTitle('')
  }

  return (
    <div className="inputForm">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} className="btn is-primary">ADD</button>
      </div>
    </div>
  );
}

export default TaskInput;
