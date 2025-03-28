import React from 'react';
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from './Skills_Styles.ts'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

type SkillsPropsType = {
    iconId: string,
    title: string,
    description: string,
}
export const Skill:React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
    return (
        <S.Skills>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skills>
    );
};
