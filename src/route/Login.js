import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import LoginLogin from '../components/LoginLogin';
import HomeFooter from '../components/HomeFooter';
import photosource from '../엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import LoginLogo from '../components/LoginLogo';

const GlobalStyle = createGlobalStyle`
    body{
        min-width: 1210px;
        height: 100vh;
        position: relative;
    }
    img {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    }
`


const Login = () => {
    return (
    <>
        <GlobalStyle />
        <img src={photosource} />
        <LoginLogo />
        <LoginLogin />
        <HomeFooter />
    </>
    )
}

export default Login;