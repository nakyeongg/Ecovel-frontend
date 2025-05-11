import React, { useState, useEffect } from 'react';
import * as S from './LoginPage.styled';
import { Layout } from '../../layout/Layout';
import { GreenButton } from '../../components/GreenButton';
import { GreyButton } from '../../components/GreyButton';
import miniLogo from '../../assets/images/miniLogo.png';
import emailIcon from '../../assets/icons/user/email.svg';
import passwordIcon from '../../assets/icons/user/password.svg';
import mainAxios from '../../apis/mainAxios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        try {
            const response = await mainAxios.post('api/users/login', {
                email,
                password,
            })
            console.log('로그인 요청 성공', response);
            if (response.data.success) {
                console.log('로그인 성공', response.data);
                localStorage.setItem('csrftoken', response.data.result.token);
                navigate('/main');
            } else {
                alert(response.data.error);
            }
        } catch(error) {
            alert('로그인 실패', error);
        }
    }

    const clickSignup = () => {
        navigate('/signup');
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
                <GreenButton text='Login' disabled={disable} onClick={handleLogin}/>
                <GreyButton text='Sign in' onClick={clickSignup}/>
            </S.Wrapper>            
        </Layout>
    )
}

export default LoginPage;
