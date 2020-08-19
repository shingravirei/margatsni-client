import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar';
import theme from '../theme';

describe('Navbar', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <Navbar />
            </ThemeProvider>
        );
    });

    it('renders the component', () => {
        screen.debug();

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Some Search' }
        });

        screen.debug();
    });

    it('search works', () => {});
});
