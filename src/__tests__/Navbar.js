import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '../components/Navbar';

describe('Navbar', () => {
    it('renders', () => {
        render(<Navbar />);
    });
});
