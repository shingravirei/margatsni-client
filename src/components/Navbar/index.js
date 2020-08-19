import React from 'react';

import logo from '../../logo.svg';
import home from '../../assets/home-outline.svg';
import compass from '../../assets/compass-outline.svg';
import Nav from './styled';

const Navbar = () => (
    <Nav>
        <div>
            <img src={logo} alt="logo" height={30} />
            <input type="text" />
            <ul>
                <li>
                    <img src={home} alt="home" height={22} width={22} />
                </li>
                <li>
                    <img src={compass} alt="compass" height={22} width={22} />
                </li>
            </ul>
        </div>
    </Nav>
);

export default Navbar;
