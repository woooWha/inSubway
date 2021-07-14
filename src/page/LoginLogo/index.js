import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {LoginTopBlock} from './style';


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