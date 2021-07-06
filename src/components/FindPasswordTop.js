import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FindTopBlock = styled.div`
    width: 100%;
    max-width: 1210px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: white;
    a {
        text-decoration: none;
    }
    .gohome{
        font-size:24px;
        font-weight: bold;
        color: white;
    }
    .signin {
        color:white;
        font-weight: bold;
    }
    .membership {
        margin-left: 15px;
        border: 1px solid skyblue;
        box-sizing: border-box;
        padding: 4px 6px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
    }
`

const FindTop = () => {
    return (
        <FindTopBlock>
            <Link to='/' className="gohome">지옥철에서</Link>
            <div>
                <Link to='/login' className='signin'>SIGNIN</Link> 
                <Link to='/membership' className='membership'>회원가입</Link> 
            </div>
        </FindTopBlock>
    )
}

export default FindTop;