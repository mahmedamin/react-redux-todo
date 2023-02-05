import {useState} from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Paper from "@mui/material/Paper";
import {useDispatch} from "react-redux";
import {actionCreators} from '../state'

function TodoForm() {
    const [todoInput, setTodoInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(actionCreators.createTodo(todoInput));
        setTodoInput('');
    }

    return (
        <Paper className="root">
            <InputBase
                className="input"
                placeholder="Add Todo"
                value={todoInput}
                onChange={e => setTodoInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            />
            <IconButton
                className="iconButton"
                aria-label="add"
                onClick={handleAddTodo}
            >
                <AddCircleOutlineIcon/>
            </IconButton>
        </Paper>
    );
}

export default TodoForm;
