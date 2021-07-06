import React from 'react';
import styled from 'styled-components';
import FindTop from '../components/FindPasswordTop';
import { createGlobalStyle } from 'styled-components';
import FindMiddle from '../components/FindPasswordMiddle';
import HomeFooter from '../components/HomeFooter';

const GlobalStyle = createGlobalStyle`
body{
    min-width: 1210px;
    background: black;
}`

const Findpassword = () => {
    return (
    <>
        <GlobalStyle></GlobalStyle>
        <FindTop></FindTop>
        <FindMiddle></FindMiddle>
        <HomeFooter></HomeFooter>
    </>
    )
}

export default Findpassword;