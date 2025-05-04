import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <Wrapper>
        <Logo src={logo} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: #FFFFFF;
`

const Logo = styled.img`
    width: 140px;
`