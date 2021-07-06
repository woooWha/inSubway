import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FindTopBlock = styled.div`
    padding: 60px 300px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: white;
    .gohome{
        font-size:26px;
        font-weight: bold;
        color: white;
        text-decoration: none;
    }
    span {
        font-weight: bold;
    }
    .signup {
        margin-left: 15px;
        border: 1px solid skyblue;
        box-sizing: border-box;
        padding: 2px;
        border-radius: 4px;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
    .signin {
        text-decoration: none;
        color:white;
        font-weight: bold;
    }
`

const FindTop = () => {
    return (
        <FindTopBlock>
            <Link to='/' className="gohome">지옥철에서</Link>
            <div>
                <Link to='/login' className='signin'>SIGNIN</Link> 
                <Link to='/membership' className='signup'>회원가입</Link> 
            </div>
        </FindTopBlock>
    )
}

export default FindTop;