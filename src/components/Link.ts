import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Link = styled.a<{active?:boolean}>`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 1px;
    position: relative;
    padding: 10px;
    z-index: 0;

    &:hover {
        &::before {
            height: 10px;
        }
    }


    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        height: 0;
        transition: ${theme.animations.transition};
        ${props => props.active && css<{ active?: boolean }>`
            height: 10px`}
    }`