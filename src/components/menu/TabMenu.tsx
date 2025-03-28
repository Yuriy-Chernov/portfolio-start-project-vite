import styled from "styled-components";
import {Link} from "../Link.ts";


export type TabsStatusType = "all" | "react" | "spa" | "landing"


type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TabsStatusType }>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
}
export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map(
                    (item: { status: TabsStatusType, title: string }, index: number) => {
                        return <ListItem key={index}>
                            <Link as={"button"} active={props.currentFilterStatus === item.status } onClick={() => {
                                props.changeFilterStatus(item.status)
                            }}>{item.title}</Link>
                        </ListItem>
                    })}

            </ul>
        </StyledMenu>);
};
const StyledMenu = styled.nav`


    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 36px;
    }
`

const ListItem = styled.li``
