import todosApi from "./todosApi";
// import { push } from "connected-react-router";

// const asignarProductos = (payload) => ({
//     type: "asignar-productos",
//     payload
// });

const todosApiMiddleware = ({dispatch}) => (next) => async (action) => {

    switch(action.type){
        case "obtener-todos":
        {
            const todos = await todosApi.all();
            dispatch({
                type: "update-todo-list",
                payload: todos
            });
            // dispatch(asignarProductos(todos));
            break;
        }
        case "add-todo":
        {
            await todosApi.add(action.payload);
            const todos = await todosApi.all();
            dispatch({
                type: "update-todo-list",
                payload: todos
            });
            dispatch({
                type: "select-todo",
                payload: {}
            });
            // dispatch(push("/"));

            break;
        }
        case "edit-todo":
        {
            await todosApi.update(action.payload);

            const todos = await todosApi.all();
            dispatch({
                type: "update-todo-list",
                payload: todos
            });
            dispatch({
                type: "select-todo",
                payload: {}
            });
            // dispatch(push("/"));

            break;
        }
        case "delete-todo":
        {
            await todosApi.remove(action.payload.codigo);

            const todos = await todosApi.all();
            dispatch({
                type: "update-todo-list",
                payload: todos
            });
            break;
        }
        case "select-todo":
        {
            const {codigo} = action.payload;

            if(codigo){
                const todo = await todosApi.single(codigo);
                next({ type: action.type, payload: todo });

            } else {
                next({ type: action.type, payload: {} });
            }

            break;
        }
        case "complete-todo":
        {
            const newTodo = { ...action.payload, estado: "completado" };
            await todosApi.update(newTodo);

            const todos = await todosApi.all();
            dispatch({
                type: "update-todo-list",
                payload: todos
            });
            break;
        }
        default:
            next(action);
            break;
    }

}

export default todosApiMiddleware;