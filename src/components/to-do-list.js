import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto py-4">
                    <table className="table table-light table-striped table-hover shadow">
                        <tbody>
                            <tr>
                                <td colSpan={2} className="align-middle ps-3">
                                    <button className="btn btn-outline-success btn-sm">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <span className="ps-3 text-black-50 text-break">Ejemplo de tarea un poco mas larga de lo normal</span>
                                </td>
                                <td className="d-flex flex-row-reverse">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="align-middle ps-3">
                                    <button className="btn btn-outline-success btn-sm">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <span className="ps-3 text-black-50 text-break">Ejemplo de tarea un poco mas larga de lo normal</span>
                                </td>
                                <td className="d-flex flex-row-reverse">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="align-middle ps-3">
                                    <button className="btn btn-outline-success btn-sm">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <span className="ps-3 text-black-50 text-break">Ejemplo de tarea un poco mas larga de lo normal</span>
                                </td>
                                <td className="d-flex flex-row-reverse">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;