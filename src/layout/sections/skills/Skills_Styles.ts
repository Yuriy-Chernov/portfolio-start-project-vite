import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";


// Skills

const SkillsSection = styled.section`
`
// Skill


const Skills = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 42px 20px 58px;
    
    @media ${theme.media.mobile}{
        padding: 62px 0 40px;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
`

const SkillText = styled.p`

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0;
    text-align: center;

`
const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        width: 80px;
        height: 80px;
        background-color: #FFFFFF1A;
        position: absolute;

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);

    }`


export const S = {
    SkillsSection,
    IconWrapper,
    SkillTitle,
    SkillText,
    Skills,
}