import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Contact = styled.section`

`

const Form = styled.form`
    max-width: 540px;
    gap: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    textarea {
        resize: none;
        height: 155px;
        outline: none;
    }`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding:7px 15px;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    
`

export const S = {
    Field,
    Form,
    Contact
}