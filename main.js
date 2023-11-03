import './style.css';
import { App } from './src/todos/app';
import store from './src/todos/store/todo.store'

App('#app');

store.initStore();
