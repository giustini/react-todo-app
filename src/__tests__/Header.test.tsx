import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../components/header/Header';

describe('Header', function () {

    it('should have a title', () => {

        render(<Header />);

        screen.getByText((content, node) => {

            const hasText = (node: Element) => node.textContent === "mis tareas";
            const nodeHasText = hasText(node!);
            const childrenDontHaveText = Array.from(node!.children).every(
                (child) => !hasText(child)
            );

            return nodeHasText && childrenDontHaveText;
        });

    });
});
