import React from 'react';
import {S} from './Footer_Styles.ts'
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";

const socialItemsData = [
    {
        iconId: 'footSvg1'
    },
    {
        iconId: 'footSvg2'
    }, {
        iconId: 'footSvg3'
    }
    , {
        iconId: 'footSvg4'
    }

]


export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Yuriy</S.Name>
                <S.SocialIconList>
                    {socialItemsData.map((s, index) =>{
                        return (
                            <S.SocialIconItem key={index}>
                                <S.SocialIconLink>
                                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={s.iconId}></Icon>
                                </S.SocialIconLink>
                            </S.SocialIconItem>
                        )
                    })}



                </S.SocialIconList>
                <S.Copyright>© 2025 Yuriy Chernov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
