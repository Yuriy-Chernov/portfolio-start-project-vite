import React, {useEffect, useState} from 'react';
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        });
    }, [])


    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={'goToTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    bottom: 30px;
    right: 30px;
`