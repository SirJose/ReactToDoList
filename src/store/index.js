import { applyMiddleware, combineReducers, createStore } from "redux";
import todosApiMiddleware from "./api-redux";
import * as storage from './store';

const preloadedState = {
    todo: {},
    todoList: []
};

const middlewares = applyMiddleware(
    storage.loggerMiddleware,
    todosApiMiddleware
);

const reducers = combineReducers({
    todo: storage.todoReducer,
    todoList: storage.todosReducer
});

const store = createStore(reducers, preloadedState, middlewares);

export default store;