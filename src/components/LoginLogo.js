import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginTopBlock = styled.div`
    color: white;
    .gohome{
        font-size:26px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        position: absolute;
        left: 200px;
    }
`

const LoginLogo = () => {
    return (
        <LoginTopBlock>
            <Link to='/' className="gohome">지옥철에서</Link>
        </LoginTopBlock>
    )
}

export default LoginLogo;