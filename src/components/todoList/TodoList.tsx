import { Todo } from "../../model/model";
import SingleTodo from "./SingleTodo";

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return (
        <div>
            {
                todos?.map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))
            }
        </div>
    )
}

export default TodoList