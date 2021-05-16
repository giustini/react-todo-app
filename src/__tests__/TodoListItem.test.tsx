import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoListItem, { Todo } from '../components/todo-list/item/TodoListItem';

describe('TodoListItem', function () {

    it('should be rendered active with a name', () => {

        const todo: Todo = {
            name: "This is a test TODO",
            active: true
        }

        render(
            <TodoListItem
                todo={ todo }
                index={ 0 }
                onChangeTodo={ jest.fn() }
                onDeleteTodo={ jest.fn() }
            />
        );

        const todoCheckbox = screen.getByTestId("toggle-todo");

        expect(todoCheckbox).toBeInTheDocument();
        expect(todoCheckbox).not.toBeChecked();

        expect(screen.getByText(todo.name)).toBeInTheDocument();
    });

    it('should be rendered inactive with a name', () => {

        const todo: Todo = {
            name: "This is a test TODO",
            active: false
        }

        render(
            <TodoListItem
                todo={ todo }
                index={ 0 }
                onChangeTodo={ jest.fn() }
                onDeleteTodo={ jest.fn() }
            />
        );

        const todoCheckbox = screen.getByTestId("toggle-todo");

        expect(todoCheckbox).toBeInTheDocument();
        expect(todoCheckbox).toBeChecked();

        expect(screen.getByText(todo.name)).toBeInTheDocument();
    });

    it('should be updated', () => {

        const todo: Todo = {
            name: "This is a test TODO",
            active: true
        }

        const handleChangeTodo = jest.fn();

        render(
            <TodoListItem
                todo={ todo }
                index={ 0 }
                onChangeTodo={ handleChangeTodo }
                onDeleteTodo={ jest.fn() }
            />
        );

        screen.getByTestId("toggle-todo").click();

        expect(handleChangeTodo).toBeCalled();
    });

    it('should be deleted', () => {

        const todo: Todo = {
            name: "This is a test TODO",
            active: true
        }

        const handleDeleteTodo = jest.fn();

        render(
            <TodoListItem
                todo={ todo }
                index={ 0 }
                onChangeTodo={ jest.fn() }
                onDeleteTodo={ handleDeleteTodo }
            />
        );

        screen.getByTestId("delete-todo").click();

        expect(handleDeleteTodo).toBeCalled();
    });
});
