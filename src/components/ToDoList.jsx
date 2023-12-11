import { useState } from 'react';
import { IoTrash } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";


const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit"><IoAddCircleOutline /></button>
    </form>
  );
};

export const ToDoList = () => {

  const [tasks, setTasks] = useState([{
      text: "I 😊",
      isCompleted: false
    },{
      text: "Love 😍",
      isCompleted: false
    },{
      text: "ReactJS ❤️",
      isCompleted: false
    }]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><IoTrash /></button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
}
