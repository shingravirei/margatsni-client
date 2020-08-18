import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import theme from './theme';

const App = () => (
    <div>
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    </div>
);

export default App;
