import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {S} from "../skills/Skills_Styles.ts";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={'testimony'}/>
                </S.IconWrapper>
                <Slider></Slider>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50px;
    background-color: #aeb9ff;

    ${S.IconWrapper} {
        margin: 42px 0 72px
    }
`