import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [itemInputs, setItemInputs] = useState({});

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, {heading: headingInput, items: []}]);
      setHeadingInput('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAddItem = (index) => {
    if (itemInputs[index] && itemInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].items.push(itemInputs[index]);
      setTodos(newTodos);
      setItemInputs({...itemInputs, [index]: ''});
    }
  };

  const handleItemInputChange = (index, value) => {
    setItemInputs({...itemInputs, [index]: value});
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>

      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className="delete-button-heading" onClick={handleRemoveTodo}>Delete Heading</button>
            </div>
            <ul>
                {todo.items.map((item, index) => (
                    <li key={index} className='todo_inside_list'>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
            <div className='add_item'>
              <input
                type="text"
                className="item-input"
                placeholder="Add Item"
                value={itemInputs[index] || ''}
                onChange={(e) => handleItemInputChange(index, e.target.value)}
              />
              <button className="add-item-button" onClick={() => handleAddItem(index)}>Add Item</button>
            </div>
          </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
