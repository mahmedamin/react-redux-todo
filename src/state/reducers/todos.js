const initialState = [];
const todos = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return [action.payload, ...state];
        case "UPDATE_TODO":
            return state.map(todo => {
                if (action.id === todo.id){
                    todo = {...todo, ...action.payload};
                }
                return todo;
            });
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export default todos;
