import { Todo } from "../../model/model"

interface propTodo {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo: React.FC<propTodo> = ({ todo, todos, setTodos }) => {
    return (
        <form className="todos__single">
            <span className="todos__single--text">{todo.todo}</span>
        </form>
    )
}

export default SingleTodo