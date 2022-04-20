import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./to-do-item";
import { selectTodo, deleteTodo, completeTodo } from "../store/store";

const ToDoList = () => {

    const todos = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    const editar    = (codigo) => dispatch(selectTodo(codigo));
    const eliminar  = (codigo) => dispatch(deleteTodo(codigo));
    const completar = (todo) => dispatch(completeTodo(todo));

    const acciones = {
        editar,
        eliminar,
        completar
    };

    useEffect(() => {
        dispatch({ type: "obtener-todos" });
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto py-4">
                    <table className="table table-light table-striped table-hover shadow">
                        <tbody>
                            {todos.map(todo => <ToDoItem key={todo.codigo} todo={todo} acciones={acciones} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;