import React, { useState, useEffect } from 'react';
import * as S from './RegionOptionPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { regionData } from './../../constant/regionData';
import { GreenButton } from './../../components/GreenButton';
import { useNavigate } from "react-router-dom";

const RegionOptionPage = () => {
    
    const [selectedRegion, setSelectedRegion] = useState();
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    const handleRegion = (event) => {
        const value = Number(event.target.value);
        console.log('click', value);
        if (value===selectedRegion) {
            setSelectedRegion(undefined);
        } else {
            setSelectedRegion(value);
        }
    }

    const handleButton = () => {
        navigate('/travel/district', { state: {  }});
    }

    useEffect(() => {
        setDisable(selectedRegion === undefined);
    }, [selectedRegion]);

    return (
        <Layout>
            <Header />
            <S.Desc>Please select a city to travel to</S.Desc>
            <S.Wrapper>
                {regionData.map((region, index) => (
                    <label key={index}>
                        <S.Input
                            type='radio'
                            name='rank'
                            value={region.value}
                            onClick={handleRegion}
                            onChange={()=>{}}
                            checked={region.value===selectedRegion}
                        />
                        <S.Text selected={index===selectedRegion}>
                            {region.text}
                        </S.Text>
                    </label>
                ))}
            </S.Wrapper>
            <S.Buttonwrapper>
                <GreenButton
                    text='Next'
                    disabled={disable}
                    onClick={handleButton}
                />                
            </S.Buttonwrapper>
        </Layout>
    )
}

export default RegionOptionPage;
