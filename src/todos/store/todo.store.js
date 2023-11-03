import { Todo } from "../models/todos.models"

const Filters = {
    All: 'All',
    Completed: 'completed',
    Pending: 'Pending',
};

const state = {
    todos: [
        new Todo("Piedra 1"),
        new Todo("Piedra 2"),
        new Todo("Piedra 3"),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('Init store');
}
const loadStore = () => {
    throw new Error('Por implementar');
}

/**
 * 
 * @param {filter} filter 
 * @returns {Todo}
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`El filtro ${filter} no es valido`);
    }
}

const addTodo = description => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
}

const toggleTodo = todoId => {
    state.todos.map(todo => {
        if (todoId === todoId)
            todo.done = !todo.done;
       return todo;
    });
}

const deleteTodo = todoId => {
    return state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    return state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param {filter} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
 return [...state.filter];
}

export default {
    initStore,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    loadStore,
    setFilter,
    toggleTodo,
}