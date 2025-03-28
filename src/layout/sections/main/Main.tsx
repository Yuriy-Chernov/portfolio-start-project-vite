import React from 'react';
import photo from './../../../assets/images/MainPhoto.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {S} from './Main_Styles.ts'
import {Container} from "../../../components/Container.ts";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextBlock>
                        <S.WelcomeText>Hi There</S.WelcomeText>
                        <S.Name>I am <span>Yuriy Chernov</span></S.Name>
                        <S.MainTitle>
                           <p> A Web Developer.</p>
                            <Typewriter

                            options={{
                                strings: ['A Web Developer.','A Frontend Developer.','A Web Designer.'],
                                autoStart: true,
                                loop: true,
                                delay:50
                            }}
                        /></S.MainTitle>
                    </S.TextBlock>

                    <Tilt><S.PhotoWrapper>
                        <S.Photo src={photo} alt=''/>
                    </S.PhotoWrapper>
                </Tilt>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};
