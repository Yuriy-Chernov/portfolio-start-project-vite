import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Link} from "react-scroll";


// Menu
const MenuItem = styled.li`
    position: relative;

`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }

`

const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: transparent;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 11;
        transform: scale(0);
        transition: ${theme.animations.transition};
    }


    &:hover, &.active {
        &::before {
            transition: ${theme.animations.transition};    
        
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(15deg) translateX(5px);
            color: ${theme.colors.font};
            


            & + ${Mask} {
                
                transform: skewX(-15deg) translateX(-5px);
            }
`

// MobileMenu

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.9);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:translateY(-100%);
    transition: ${theme.animations.transition};

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 0.4s ease-in-out;
        
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: translateY(0);
        & ul{
            gap:30px
        }
    `}

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;


    top: 100px;
    right: 100px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: fixed;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }

    }`

//DesktopMenu

const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`
export const S = {
    NavLink,
    MenuItem,
    Mask,
    BurgerButton,
    MobileMenuPopup, StyledDesktopMenu
}