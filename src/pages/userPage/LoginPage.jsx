import React, { useState, useEffect } from 'react';
import * as S from './LoginPage.styled';
import { Layout } from '../../layout/Layout';
import { GreenButton } from '../../components/GreenButton';
import { GreyButton } from '../../components/GreyButton';
import miniLogo from '../../assets/images/miniLogo.png';
import emailIcon from '../../assets/icons/user/email.svg';
import passwordIcon from '../../assets/icons/user/password.svg';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        setDisable(email.trim() === "" || password.trim() === "");
    }, [email, password]);

    return (
        <Layout>
            <S.Wrapper>
                <S.Logo src={miniLogo} />
                <S.InputWrapper>
                    <S.InuptIcon src={emailIcon} />
                    <S.Input 
                        placeholder='email'
                        value={email}
                        onChange={handleEmail}
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.InuptIcon src={passwordIcon} />
                    <S.Input 
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={handlePassword}
                    />
                </S.InputWrapper>
                <GreenButton text='Login' disabled={disable} />
                <GreyButton text='Sign in'/>
            </S.Wrapper>            
        </Layout>
    )
}

export default LoginPage;
