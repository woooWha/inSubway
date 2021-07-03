import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 395px 26px 395px;
    h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        margin-right: 50px;
        color: white;
    }
    span {
        font-size: 16px;
        margin: 0;
        color: white;
    }
    input {
        width: 367px;
        background: #0E0E0D;
        border-radius: 8px;
        border: none;
        outline: none;
        ::placeholder {
            color: white;
            padding: 0 12px;
        }
    }
    .left {
        display: flex;
    }
`
const HeaderSubBlock = styled.div`
    padding: 0 395px;
    color: white;
    margin-bottom: 15px;
    span {
        margin-right: 65px;
        font-size: 16px;
    }
`

const HomeHeader = () => {
    return (
        <div>
            <HeaderBlock>
                <div className="left">
                    <h1>지옥철에서</h1>
                    <input placeholder="🔍  Search Brand and Routine" />
                </div>
                <span>SIGN IN</span>
            </HeaderBlock>
            <HeaderSubBlock>
                <span>LiFE</span>
                <span>BRANDING</span>
                <spna>ROUTINE</spna>
            </HeaderSubBlock>
        </div>
    )
}

export default HomeHeader;

