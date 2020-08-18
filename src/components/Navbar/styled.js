import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    height: 3.375rem;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.bg};
    position: fixed;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 44rem) {
        position: fixed;
        bottom: 0;

        ul {
        }
    }

    @media screen and (min-width: 44rem) {
    }
`;

export default Nav;
