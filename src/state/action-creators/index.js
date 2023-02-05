export const createTodo = (todoName) => {
    const todo = {
        id: Math.random().toString(36).substring(2,16),
        name: todoName,
        marked: false
    }

    return {
        type: "CREATE_TODO",
        payload: todo
    }
};

export const updateTodo = (todoId, payload) => {
    return {
        type: "UPDATE_TODO",
        id: todoId,
        payload
    }
};

export const deleteTodo = (todoId) => {
    return {
        type: "DELETE_TODO",
        id: todoId
    }
};
