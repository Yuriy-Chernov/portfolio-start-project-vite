import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center ;
`


const Slide = styled.div`
    max-width: 100%;
    text-align: center`

const Text = styled.p``

const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 42px 35px;`

const Pagination = styled.div`
span{
    display: inline-block; 
    width: 7px;
    height: 7px;
  
    background-color: rgba(255, 255, 255, 0.3);

    & + span {
        margin-left: 5px;
    }
    &.active{
        background-color: ${theme.colors.accent};
        
    }
}`

export const S = {
    Pagination,
    Text,
    Name,
    Slide,
    Slider
}