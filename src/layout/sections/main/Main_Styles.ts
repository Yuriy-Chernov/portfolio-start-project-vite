import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.ts";

const TextBlock = styled.div`
    text-align: left`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`
const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})};

    line-height: 40px;
    letter-spacing: 0;
    p{
        display: none;
    }
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})};

    margin: 10px 0;

    span {
        z-index: 0;
        position: relative;
        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            height: 20px;
            width: 100%;
            background-color: ${theme.colors.accent};
            position: absolute;
            top: 30px;
            z-index: -12;


        }
    }


    @media ${theme.media.mobile} {
        margin: 15px 0 22px
    }
`

const WelcomeText = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    ${font({weight: 400, Fmax: 27, Fmin: 20})};
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: ${theme.colors.accent} 5px solid;
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;


        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }


    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

export const S = {
    Photo,
    PhotoWrapper,
    Name,
    WelcomeText,
    StyledMain,
    TextBlock,
    MainTitle

}