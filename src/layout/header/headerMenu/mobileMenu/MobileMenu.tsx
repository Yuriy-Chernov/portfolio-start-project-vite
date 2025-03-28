import React, {useState} from 'react';
import styled from "styled-components";
import {S} from '../HeaderMenu_Styles.ts'
import {Menu} from "../Menu/Menu.tsx";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    return (
        <StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <Menu/>
            </S.MobileMenuPopup>
        </StyledMobileMenu>)
}

const StyledMobileMenu = styled.nav`



`


