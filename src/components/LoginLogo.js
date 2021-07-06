import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginTopBlock = styled.div`
    color: white;
    width: 100%;
    .gohome{
        position: relative;
        top: 20px;
        left: 20px;
        font-size:18px;
        font-weight: bold;
        color: white;
        text-align:left;
        text-decoration: none;
    }
    a {
        text-decoration:none;
    }
`

const LoginLogo = () => {
    return (
        <LoginTopBlock>
            <Link to='/'> 
                <span className="gohome">
                    지옥철에서
                </span>
            </Link>
        </LoginTopBlock>
    )
}

export default LoginLogo;