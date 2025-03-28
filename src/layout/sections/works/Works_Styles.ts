import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Link} from "../../../components/Link.ts";


// Works

const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px
    }

    padding-top:78px;
    
    ${SectionTitle}{
    margin-bottom: 80px;
}
`

// Work


const Work = styled.div`
    background: ${theme.colors.secondaryBg};;
    //width: 330px;
    //flex-grow: 1;
    max-width: 540px;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`


const Title = styled.h3``

const Text = styled.p`
    text-align: left;
    margin: 14px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};
        &::before {
            width: 100%;
            height: 100%;

        }
    }
    &:hover {
        &::before {
            opacity: 1;
            
        }

        ${Button} {
            transform: translate(-50%, -50%);
            
            opacity: 1;
            background-color: ${theme.colors.accent}
            
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            background-color: ${theme.colors.accent}
        }
    }


   `
export const S = {
    ImageWrapper,
    Text,
    Description,
    Title,
    Image,
    Work,
    Works,
}