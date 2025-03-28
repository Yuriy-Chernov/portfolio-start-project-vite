import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Menu} from "../Menu/Menu.tsx";


export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems} />
        </StyledDesktopMenu>)
        ;
};
const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

