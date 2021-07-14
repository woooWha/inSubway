import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HeaderBlock, HeaderSubBlock} from './style';


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
                <span>ROUTINE</span>
            </HeaderSubBlock>
        </>
    )
}

export default HomeHeader;

