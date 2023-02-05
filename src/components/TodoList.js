import List from "@mui/material/List";
import {useSelector} from "react-redux";
import TodoListItem from "./TodoListItem";

function TodoList() {
    const todos = useSelector(state => state.todos);

    return (
        <div className="listContainer">
            <List component="nav">
                {
                    todos.map((todo) => (
                        <TodoListItem key={todo.id} todo={todo} />
                    ))
                }
            </List>
        </div>
    );
}

export default TodoList;
