import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FindTopBlock} from './style';


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