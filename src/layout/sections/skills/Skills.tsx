import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Skills_Styles.ts'
import {Roll} from "react-awesome-reveal";

const skillData = [
    {
        iconId: 'skills1',
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'skills2',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'skills3',
        title: 'react',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'skills4',
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'skills5',
        title: 'styled component',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'skills6',
        title: 'web design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]


export const Skills: React.FC = () => {
    return (
        <S.SkillsSection id={'skills'}>
           <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify={'space-between'}>
                    {skillData.map((s, index) => {
                        return <Roll damping={0.5}> <Skill
                            iconId={s.iconId}
                            key={index}
                            title={s.title}
                            description={s.description}
                        /> </Roll>
                    })
                    }
                </FlexWrapper>
            </Container>

        </S.SkillsSection>
    );
};


