import React, { useState, useEffect } from 'react';
import * as S from './SignupPage.styled';
import { Layout } from './../../layout/Layout';
import { GreenButton } from '../../components/GreenButton';
import personalCardIcon from '../../assets/icons/user/personalcard.svg';
import emailIcon from '../../assets/icons/user/email.svg';
import phoneIcon from '../../assets/icons/user/phone.svg';
import passwordIcon from '../../assets/icons/user/password.svg';
import mainAxios from '../../apis/mainAxios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailAvailable, setEmailAvailable] = useState(false); // 이메일 형식을 지켰는지
    const [isValidEmail, setIsValidEmail] = useState(false); // 사용 가능한 이메일인지
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        const emailCondition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailCondition.test(value));
        setEmailAvailable(false);
    }

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const checkEmail = async () => {
        try {
            const response = await mainAxios.get('api/users/check-email', {
                params: {email},
            });
            console.log(response.data);
            if (response.data.success) {
                setEmailAvailable(true);
                alert('사용 가능한 이메일입니다.');
            } else {
                setEmailAvailable(false);
                alert('이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.')
            }
            } catch(error) {
            alert('이메일 사용 가능 여부 확인 중 에러가 발생했습니다. 다시 시도해주세요.');
        }
    }

    const handleSignup = async () => {
        try {
            const response = await mainAxios.post('api/users/signup', {
                email,
                password,
                nickname: name,
                phonenumber: phoneNumber,
            })
            console.log('회원가입 성공', response);
            navigate('/login');
        } catch(error) {
            console.log('회원가입 에러', error);
        }
    }

    useEffect(() => {
        setDisable(!(name.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== "" && password.trim() !== "" && emailAvailable));
    }, [name, email, phoneNumber, password, emailAvailable]);

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
                <S.EmailInputWrapper>
                    <S.Input
                        placeholder='example@naver.com'
                        value={email}
                        onChange={handleEmail}
                        type='email'
                    />
                    <S.EmailButton onClick={checkEmail} disabled={!isValidEmail}>Check</S.EmailButton>
                </S.EmailInputWrapper>
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
            <GreenButton text='Sign up' disabled={disable} onClick={handleSignup}/>
        </Layout>
    )
}

export default SignupPage;
