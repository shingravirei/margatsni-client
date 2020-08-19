import React from 'react';

import logo from '../../logo.svg';
import home from '../../assets/home-outline.svg';
import compass from '../../assets/compass-outline.svg';
import Nav, { Logo, SearchBar, NavItems } from './styled';

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Logo src={logo} alt="logo" height={30} />
                <SearchBar type="text" />
                <NavItems>
                    <li>
                        <img src={home} alt="home" height={22} width={22} />
                    </li>
                    <li>
                        <img
                            src={compass}
                            alt="compass"
                            height={22}
                            width={22}
                        />
                    </li>
                </NavItems>
            </div>
        </Nav>
    );
};

export default Navbar;
