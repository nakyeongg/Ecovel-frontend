import React, { useEffect } from 'react';
import * as S from './Onboarding.styled';
import { Layout } from '../../layout/Layout';
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        },2000);

        return() => clearTimeout(timer);
    }, [navigate]);

    return (
        <Layout>
            <S.Wrapper>
                <S.Logo src={logo} alt="ecovel logo" />
            </S.Wrapper>
        </Layout>
    )
}

export default Onboarding;
