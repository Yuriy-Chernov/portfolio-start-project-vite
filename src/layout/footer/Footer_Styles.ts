import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.ts";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    position: relative;
    padding: 40px 0`

const Name = styled.span`
    letter-spacing: 3px;
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
`

const SocialIconList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialIconItem = styled.li``

const SocialIconLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: ${theme.animations.transition};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }


`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`


export const S = {
    SocialIconItem,
    SocialIconLink,
    Copyright,
    SocialIconList,
    Footer,
    Name
}