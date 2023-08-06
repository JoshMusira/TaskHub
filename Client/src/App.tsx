import { useState } from 'react'
import './App.css'
import InputField from './components/inputField/InputField'
import { Todo } from './model/model'
import TodoList from './components/todoList/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("");
    }
  }

  return (
    <div className='App'>
      <span className="heading">TaskHub</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div >
  )
}

export default App
