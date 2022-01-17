import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import LastBar from "./components/LastBar";

function App() {

  const [theme,setTheme] = useState('light');
  const [input,setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    console.log(filteredTodos)
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  

  return (
    <div className="todo-app" data-theme={theme}>
      <div className="picture">
      <img src={`./images/bg-desktop-${theme}.jpg`} alt=""/>
      </div>
      <div className="background"></div>
      <div className="container">
        <header>
          <h1>TODO</h1>
          <div className="icon" onClick={changeTheme}>
            <img src={`./images/icon-${theme === 'dark' ? "sun":"moon"}.svg`} alt=""/>
          </div>
        </header>
        <TodoForm input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        <LastBar setStatus={setStatus} />
      </div>
    </div>
  );
}

export default App;
