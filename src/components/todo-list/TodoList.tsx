import React, { Component } from "react";

import TodoListInput from "./input/TodoListInput";
import TodoListItem, { Todo } from "./item/TodoListItem";

import "./TodoList.scss";


interface TodoListProps {
}

interface TodoListState {
    todos: Todo[];
}

class TodoList extends Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps) {
        super(props);

        this.state = {
            todos: [
                { name: "Aprender LESS", active: true },
                { name: "Realizar tests en React", active: true },
                { name: "Animaciones", active: false },
                { name: "Desplegar aplicación", active: true }
            ]
        }
    }

    render() {

        const { todos } = this.state;

        return (
            <div className="todo-list">

                <TodoListInput
                    onAddTodo={ this.handleAddTodo }
                />

                <section className="items-list">
                    { todos.map((todo, i) => (
                        <TodoListItem
                            todo={ todo }
                            index={ i }
                            onChangeTodo={ this.handleChangeTodo }
                            onDeleteTodo={ this.handleDeleteTodo }
                            key={ i } />)
                    ) }
                </section>

                { !!todos.length &&
                <footer>

                    <span className="items-left">{ this.getActiveTodosCount(todos) } tareas pendientes</span>

                    { !!this.getNotActiveTodosCount(todos) &&
                    <button onClick={ this.handleClearCompleted }>Eliminar completadas</button> }

                </footer> }

            </div>
        );
    }

    handleAddTodo = (todoName: string) => {

        const newTodo: Todo = {
            name: todoName,
            active: true
        };

        this.setState({ todos: [ ...this.state.todos, newTodo ] })
    }

    handleChangeTodo = (todo: Todo, index: number) => {

        const newTodos = [ ...this.state.todos ];
        newTodos[ index ].active = todo.active;

        this.setState({ todos: newTodos });
    }

    handleDeleteTodo = (index: number) => {

        const newTodos = [ ...this.state.todos ];
        newTodos.splice(index, 1);

        this.setState({ todos: newTodos });
    }

    getActiveTodosCount = (todos: Todo[]) => {
        return todos.filter(todo => todo.active).length;
    }

    getNotActiveTodosCount = (todos: Todo[]) => {
        return todos.filter(todo => !todo.active).length;
    }

    handleClearCompleted = () => {

        const newTodos = [ ...this.state.todos ];

        this.setState({ todos: newTodos.filter(todo => todo.active) });
    }
}

export default TodoList;