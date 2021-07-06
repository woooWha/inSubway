import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 40px;
    padding: 0px 30px;
    margin-top: 40px;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
    }
    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-right: 50px;
        color: white;
    }
    input {
        width: 367px;
        padding: 10px;
        background: #0E0E0D;
        border-radius: 16px;
        border: none;
        outline: none;
        ::placeholder {
            color: white;
            padding: 0 12px;
        }
    }
    a {
        font-size: 16px;
        margin: 0;
        color: white;
        text-decoration:none;
    }
`

const HeaderSubBlock = styled.div`
    width: 100%;
    max-width: 900px;
    color: white;
    margin-bottom: 15px;
    span {
        margin-right: 65px;
        font-size: 16px;
    }
    span:nth-child(3){
        margin-right: 0;
    }

    
`

const HomeHeader = () => {
    return (
        <>
            <HeaderBlock>
                <div className="left">
                    <h1>지옥철에서</h1>
                    <input placeholder="🔍  Search Brand and Routine" />
                </div>
                <Link to="/login">SIGN IN</Link>
            </HeaderBlock>
            <HeaderSubBlock>
                <span>LiFE</span>
                <span>BRANDING</span>
                <spna>ROUTINE</spna>
            </HeaderSubBlock>
        </>
    )
}

export default HomeHeader;

