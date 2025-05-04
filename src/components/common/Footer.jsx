import React from 'react';
import styled from 'styled-components';
import home from '../../assets/icons/main/home.png';
import like from '../../assets/icons/main/like.png';
import user from '../../assets/icons/main/user.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <Wrapper>
            <Link to='/'>
                <Icon src={home} />
            </Link>
            <Link to='/'>
                <Icon src={like} />
            </Link>
            <Link to='/'>
                <Icon src={user} />
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #F6F6F6;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 65px;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
`