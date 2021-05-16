import React, { Component } from "react";
import classNames from "classnames";

import "./TodoListItem.scss";


export type Todo = {
    name: string;
    active: boolean;
}

interface TodoListItemProps {
    todo: Todo;
    index: number;

    onChangeTodo(todo: Todo, index: number): void
    onDeleteTodo(index: number): void;
}

interface TodoListItemState {

}

class TodoListItem extends Component<TodoListItemProps, TodoListItemState> {

    render() {

        const { todo, index } = this.props;

        return (
            <div className={ classNames("todo-list-item", { "checked": !todo.active }) }>

                <div className="rounded-checkbox">

                    <input
                        type={ "checkbox" }
                        id={ `checkbox-${ index }` }
                        checked={ !todo.active }
                        onChange={ this.handleCheckTodo }
                    />

                    <label htmlFor={ `checkbox-${ index }` } />

                </div>

                <span className="todo-name">{ todo.name }</span>

                <button className="delete-todo" onClick={ this.handleDeleteTodo }>×</button>

            </div>
        );

    }

    handleCheckTodo = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { todo, index } = this.props;

        this.props.onChangeTodo({ ...todo, active: !e.target.checked }, index);
    };

    handleDeleteTodo = () => {

        const { index } = this.props;

        this.props.onDeleteTodo(index);
    };
}

export default TodoListItem;