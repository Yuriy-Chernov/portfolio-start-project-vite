import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item: string, index: number) => {
                return <ListItem key={index}>
                    <Link href=''>
                        {item}
                        <Mask><span>{item}</span></Mask>
                        <Mask><span>{item}</span></Mask>
                    </Link>

                </ListItem>
            })}

        </ul>
    );
};

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        span{
            display:inline-block;
            transform: translateY(-50%);
        }
    }

`
const ListItem = styled.li`
position: relative;
    
&::before{
    content:'';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top:50%;
    left: -10px;
    right: -10px;
    z-index: 11;    transform:scale(0);
    transition: all 500ms ease-in-out ;
}
    

    
    
&:hover {
    &::before{
        transform:scale(1);
    }
    ${Mask} {
        transform:skewX(15deg) translateX(5px);
        color: ${theme.colors.font};   transition: all 500ms ease-in-out ;
 
    
    & + ${Mask}{   transition: all 500ms ease-in-out ;
        transform:skewX(-15deg) translateX(-5px);
    }
}`

const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: transparent;
`