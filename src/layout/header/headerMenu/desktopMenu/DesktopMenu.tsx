import React from 'react';
import {S} from '../HeaderMenu_Styles.ts'
import {Menu} from "../Menu/Menu.tsx";


export const DesktopMenu: React.FC = () => {
    return (
        <S.StyledDesktopMenu>
            <Menu/>
        </S.StyledDesktopMenu>)
        ;
};


