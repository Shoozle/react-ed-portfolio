import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1 className="logo"><a href="#">Pedro</a></h1>
            <ul>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    .logo {
        font-size: 1.8rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
        li {
            padding-left: 5rem;
            position: relative;
        }
    }
`

export default Nav;