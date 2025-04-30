import React, { useState, useEffect } from 'react';
import * as S from './SignupPage.styled';
import { Layout } from './../../layout/Layout';
import { GreenButton } from '../../components/GreenButton';
import personalCardIcon from '../../assets/icons/user/personalcard.svg';
import emailIcon from '../../assets/icons/user/email.svg';
import phoneIcon from '../../assets/icons/user/phone.svg';
import passwordIcon from '../../assets/icons/user/password.svg';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        setDisable(name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || password.trim() === "");
    }, [name, email, phoneNumber, password]);

    return (
        <Layout>
            <S.Title>Sign up</S.Title>
            <S.Container>
                <S.CategoryWrapper>
                    <S.Icon src={personalCardIcon}/>
                    <S.Category>Name</S.Category>
                </S.CategoryWrapper>
                <S.Input
                    placeholder='Sophia'
                    value={name}
                    onChange={handleName}
                />
            </S.Container>
            <S.Container>
                <S.CategoryWrapper>
                    <S.Icon src={emailIcon}/>
                    <S.Category>Email</S.Category>
                </S.CategoryWrapper>
                <S.Input
                    placeholder='example@naver.com'
                    value={email}
                    onChange={handleEmail}
                    type='email'
                />
            </S.Container>
            <S.Container>
                <S.CategoryWrapper>
                    <S.Icon src={phoneIcon}/>
                    <S.Category>Phone number</S.Category>
                </S.CategoryWrapper>
                <S.Input
                    placeholder='01012345678'
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    type='number'
                />
            </S.Container>
            <S.Container>
                <S.CategoryWrapper>
                    <S.Icon src={passwordIcon}/>
                    <S.Category>Password</S.Category>
                </S.CategoryWrapper>
                <S.Input
                    placeholder='English, numeric combination 8 to 16 characters'
                    value={password}
                    onChange={handlePassword}
                    type='password'
                />
            </S.Container>
            <GreenButton text='Sign up' disabled={disable} />
        </Layout>
    )
}

export default SignupPage;
