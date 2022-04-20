import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addTodo, editTodo } from "../store/store";

const ToDoForm = () => {

    // const quote = "Motivational quote!";

    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        codigo: 0,
        texto: '',
        estado: 'pendiente'
    });

    useEffect(() => {
        setValues({
            codigo: todo.codigo || 0,
            texto: todo.texto || '',
            estado: todo.estado || 'pendiente'
        });
    }, [todo]);

    const onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues((v) => ({
            ...v,
            [name]: value
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = values;
        if(values.texto){
            if(values.codigo > 0){
                dispatch(editTodo(payload));
            } else {
                dispatch(addTodo(payload));
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto py-4">
                    <div className="card shadow">

                        <div className="card-header text-center">
                            <h3>
                                <FontAwesomeIcon icon={faPencil} className="icon-Dark" />
                                &nbsp;To-Do!
                                <FontAwesomeIcon icon={faPencil} className="icon-Dark" />
                            </h3>
                        </div>
                        
                        <div className="card-body">
                            <form action="index.html" onSubmit={onSubmit}>
                                <div className="input-group my-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="texto"
                                        id="texto"
                                        value={values.texto}
                                        onChange={onChange}
                                        placeholder="Describe tu tarea..." 
                                        aria-label="Describe tu tarea" />
                                    <button className="btn btn-primary" type="submit"><FontAwesomeIcon icon={faPlus} className="icon-Light" /></button>
                                </div>
                            </form>
                        </div>
                        
                        {/* <div className="card-footer text-black-50 text-center fst-italic noSelect">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            &nbsp;{quote}&nbsp;
                            <FontAwesomeIcon icon={faQuoteRight} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoForm;