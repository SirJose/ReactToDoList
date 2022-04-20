
const ActionTypes = {
    addToDo: "add-todo",
    editToDo: "edit-todo",
    deleteToDo: "delete-todo",
    updateToDoList: "update-todo-list",
    selectToDo: "select-todo",
    completeToDo: "complete-todo"
}

export const todoReducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.selectToDo:
            return action.payload;
        default:
            return state;
    }
};

export const todosReducer = (state = [], action) => {
    switch(action.type){
        case ActionTypes.updateToDoList:
            return action.payload;
        default:
            return state;
    }
}

export const addTodo = (payload) => ({
    type: ActionTypes.addToDo,
    payload
});

export const editTodo = (payload) => ({
    type: ActionTypes.editToDo,
    payload
}); 

export const deleteTodo = (codigo) => ({
    type: ActionTypes.deleteToDo,
    payload: { codigo }
});

export const selectTodo = (codigo) => ({
    type: ActionTypes.selectToDo,
    payload: { codigo }
});

export const completeTodo = (payload) => ({
    type: ActionTypes.completeToDo,
    payload
});

export const loggerMiddleware = store => next => action => {
    console.log("dispatching", action);
    const result = next(action);
    console.log("next state", store.getState());
    return result;
};