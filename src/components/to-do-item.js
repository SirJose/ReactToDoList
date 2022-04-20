import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const ToDoItem = (props) => {
    
    const todo = props.todo;
    const acciones = props.acciones;

    let buttonColor = "success";
    let buttonDisabled = false;
    let textDecoration = "none";
    if(todo.estado === "completado"){
        buttonColor = "secondary";
        buttonDisabled = true;
        textDecoration = "line-through";
    }

    return (
        <tr>
            <td colSpan={2} className="align-middle ps-3">
                {/* BUTTON COMPLETAR */}
                <button 
                    className={"btn btn-outline-"+buttonColor+" btn-sm"} 
                    onClick={() => acciones.completar(todo)}
                    disabled={buttonDisabled}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <span className="ps-3 text-black-50 text-break noSelect" style={{ textDecoration: textDecoration }}>
                    {todo.texto}
                </span>
            </td>
            <td className="d-flex flex-row-reverse">
                <div className="btn-group">
                    {/* BUTTON EDITAR */}
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => acciones.editar(todo.codigo)} disabled={buttonDisabled}>
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                    {/* BUTTON ELIMINAR */}
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => acciones.eliminar(todo.codigo)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ToDoItem;