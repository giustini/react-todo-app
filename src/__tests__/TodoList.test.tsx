import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoList from '../components/todo-list/TodoList';

describe('TodoList', function () {

    it('should be rendered with default todos', () => {

        render(<TodoList />);

        const todoNames = [
            "Aprender LESS",
            "Realizar tests en React",
            "Animaciones",
            "Desplegar aplicación"
        ];

        todoNames.forEach(todoName => expect(screen.getByText(todoName)).toBeInTheDocument());
    });

    it('should clear completed', () => {

        render(<TodoList />);

        const clearCompletedButton = screen.getByText("Eliminar completadas");

        expect(clearCompletedButton).toBeInTheDocument();
        clearCompletedButton.click();
        expect(clearCompletedButton).not.toBeInTheDocument();
    });

});
