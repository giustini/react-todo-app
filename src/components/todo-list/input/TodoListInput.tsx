import React, { Component } from "react";

import "./TodoListInput.scss";


interface TodoListInputProps {
    onAddTodo(todoName: string): void;
}

interface TodoListInputState {
    todoName: string;
}

class TodoListInput extends Component<TodoListInputProps, TodoListInputState> {

    constructor(props: TodoListInputProps) {
        super(props);

        this.state = {
            todoName: ""
        };
    }

    render() {

        return (
            <div className="todo-list-input">

                <input
                    placeholder="Añadir una nueva tarea..."
                    value={ this.state.todoName }
                    spellCheck={ false }
                    onChange={ this.handleChangeInput }
                    onKeyPress={ this.handleKeyPress }
                />

                <button
                    disabled={ this.todoNameIsEmpty() }
                    onClick={ this.handleAddTodo }
                >Añadir</button>

            </div>
        );
    }

    handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ todoName: e.target.value });
    };

    handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.handleAddTodo();
        }
    };

    handleAddTodo = () => {
        if (!this.todoNameIsEmpty()) {
            this.props.onAddTodo(this.state.todoName);
            this.setState({ todoName: "" });
        }
    };

    todoNameIsEmpty = () => {
        return this.state.todoName === "";
    }
}

export default TodoListInput;