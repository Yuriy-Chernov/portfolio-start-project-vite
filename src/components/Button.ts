import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Button = styled.button`

    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            width: 100%;
            height: 100%;

        }

        &::before {
            content: '';
            width: 78px;
            height: 10px;
            background-color: ${theme.colors.accent};

            display: inline-block;
            position: absolute;
            left: 50%;
            bottom: 0;
            z-index: -1;
            transform: translateX(-50%);
        }
`