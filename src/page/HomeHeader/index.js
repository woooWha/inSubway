import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HeaderBlock, HeaderSubBlock} from './style';
import {clear} from '../HomeVideo/index';


const HomeHeader = () => {
        
    return (
        <>
            <HeaderBlock>
                <div className="left">
                    <h1>지옥철에서</h1>
                    <input placeholder="🔍  Search Brand and Routine" />
                </div>
                <Link to="/login"><span onClick={clear}>SIGN IN</span></Link>
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

