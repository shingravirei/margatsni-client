import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 3.375rem;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.bg};
    position: fixed;
    border-bottom: 0.5px solid lightgrey;

    div {
        width: 100%;
        max-width: 975px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    img {
        margin-top: 8px;
    }

    input {
        height: 28px;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 2rem;
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
