import { Todo } from "../../model/model"
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import './todos.css'
interface propTodo {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo: React.FC<propTodo> = ({ todo, todos, setTodos }) => {
    return (
        <form className="todos__single">
            <span className="todos__single--text">{todo.todo}</span>
            <div>
                <span className="icon"><AiFillDelete /></span>
                <span className="icon"><MdOutlineDownloadDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo