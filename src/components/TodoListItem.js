import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import ListItem from "@mui/material/ListItem";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {actionCreators} from '../state';
import {bindActionCreators} from "@reduxjs/toolkit";

function TodoListItem({todo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editInput, setEditInput] = useState(todo.name);
    const dispatch = useDispatch();
    const {updateTodo, deleteTodo} = bindActionCreators(actionCreators, dispatch);

    const handleUpdate = () => {
        updateTodo(todo.id, {
            name: editInput
        });
        setIsEditing(false);
    }

    return (
        <ListItem>
            {
                !isEditing
                    ? <>
                        <ListItemText primary={todo.name}/>
                        <IconButton
                            className="iconButton"
                            aria-label="edit"
                            onClick={() => setIsEditing(true)}
                        >
                            <EditIcon/>
                        </IconButton>

                        <IconButton
                            className="iconButton"
                            aria-label="delete"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </>
                    :
                    <>
                        <InputBase
                            className="input"
                            placeholder="Add Todo"
                            value={editInput}
                            autoFocus
                            onChange={e => setEditInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
                        />
                        <IconButton
                            className="iconButton"
                            aria-label="cancel"
                            onClick={() => setIsEditing(false)}
                        >
                            <DoDisturbIcon/>
                        </IconButton>
                        <IconButton
                            className="iconButton"
                            aria-label="update"
                            onClick={handleUpdate}
                        >
                            <DoneIcon/>
                        </IconButton>
                    </>
            }
        </ListItem>
    )
}

export default TodoListItem;
