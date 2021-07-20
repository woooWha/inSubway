import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {fetchFindPassword} from '../../fetch/findpassword'
import {FindMiddleBlock} from './style'

const FindMiddle = () => {
    const history = useHistory();
    const[email,setEmail] = useState({
        email: ""
    });
    const onChangeEmail = (e) => {
        setEmail({...email, [e.target.name]: e.target.value});
    }
    const findPassword = async () => {
        try {
            await fetchFindPassword(email);
            history.replace("/");
        } catch (error) {
        }
    };

    return (
        <FindMiddleBlock>
            <h1>비밀번호 찾기</h1>
            <input type='text' name="email" onChange={onChangeEmail} placeholder='이메일 주소를 입력해주세요' />
            <button className="findButton" onClick={findPassword}>임시 비밀번호 보내기</button>
        </FindMiddleBlock>
    )
}

export default FindMiddle;