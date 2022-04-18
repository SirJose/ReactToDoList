import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const ToDoForm = () => {

    const quote = "Motivational quote!";

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit!");
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
                                        placeholder="Describe tu tarea..." 
                                        aria-label="Describe tu tarea" />
                                    <button className="btn btn-primary" type="submit">Agregar</button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="card-footer text-black-50 text-center fst-italic noSelect">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            &nbsp;{quote}&nbsp;
                            <FontAwesomeIcon icon={faQuoteRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoForm;