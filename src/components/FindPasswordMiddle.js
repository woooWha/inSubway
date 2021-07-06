import React from 'react';
import styled from 'styled-components';

const FindMiddleBlock = styled.form`
    margin: 100px auto;
    width: 400px;
    color: white;
    input{
        width: 100%;
        margin: 0;
        padding: 16px;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid rgba(100,100,100,0.6);
        margin-bottom: 16px;
        border-radius: 6px;
    }
    button{
        width: 100%;
        margin: 0;
        padding: 16px;
        border: none;
        background: transparent;
        color: skyblue;
        border: 1px solid skyblue;
        border-radius: 6px;
        font-weight: bold;
    }
`

const FindMiddle = () => {
    return (
        <FindMiddleBlock>
            <h1>비밀번호 찾기</h1>
            <input type='text' placeholder='이메일 주소를 입력해주세요' />
            <button>임시 비밀번호 보내기</button>
        </FindMiddleBlock>
    )
}

export default FindMiddle;