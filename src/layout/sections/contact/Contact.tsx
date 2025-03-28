import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from './Contact_Styles.ts'
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();
        if (!form.current) return
        emailjs.sendForm('service_gz6cc3n', 'template_iv57t6i', form.current, {
                publicKey: '4kSplp9idsv_7VhaW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>

                    <S.Field required placeholder={'Name'} name={"username"}></S.Field>
                    <S.Field required placeholder={'Email'} name={"email"}></S.Field>
                    <S.Field required placeholder={'Subject'} name={'subject'}></S.Field>
                    <S.Field required placeholder={'Message'} as={'textarea'} name={'message'}></S.Field>
                    <Button type={'submit'}>Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
