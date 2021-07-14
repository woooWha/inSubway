import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import LoginLogin from '../page/LoginLogin';
import HomeFooter from '../page/HomeFooter';
import photosource from '../imgVideoSource/Metro subway tunnels.jpg'
import LoginLogo from '../page/LoginLogo';

const GlobalStyle = createGlobalStyle`
    .detailWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-align: center;
        width: 100%;
        min-height: 100vh;
    }
    img {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    }
`


const Login = () => {
    return (
    <div className="detailWrap">
        <GlobalStyle />
        <img src={photosource} />
        <LoginLogo />
        <LoginLogin />
        <HomeFooter />
    </div>
    )
}

export default Login;