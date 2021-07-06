import React from 'react';
import styled from 'styled-components';

const SignUpBlock = styled.div`
    width: 360px;
    height: 560px;
    background: black;
    display: flex;
    flex-direction: column;
    color: white;
    margin: -40px auto 0 auto;
    h1{
        text-align: center;
        margin: 0;
        font-size: 26px;
        margin-bottom: 36px;
    }
    p{
        font-size: 12px;
        font-weight: bold;
    }
    input{
        background: #181816;
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 4px;
    }
    input[name=password1]{
        margin-bottom: 8px;
    }
    input[name=password3]{
        padding: 0;
    }
    .checkinput{
        background: #181816;
        padding: 8px;
        border-radius: 6px;
        margin-bottom: 32px;
    }
    select {
        background: transparent;
        color: white;
        border:none;
        outline: none;
        margin-right: 20px;
    }
    .topBox{
        margin-bottom: 24px;
        font-size: 14px;
    }
    .bottomBox{
        font-size: 12px;
        padding-left: 24px;
        margin-bottom: 48px;
    }
    .bottomBox .must{
        color: rgba(100,100,100,0.8);
    }
    button {
        padding: 14px;
        background: #FFFFFF;
        font-weight: bold;
        border-radius: 8px;
    }
`

const MembershipSignUp = () => {
    return (
        <SignUpBlock>
            <h1>SIGN UP</h1>
            <p>이메일 주소 확인</p>
            <input type='text' placeholder='이메일'/>
            <p>인증이 필요하니 정확한 이메일을 입력해주세요</p>
            <p>비밀번호(10~16,영어+숫자 조합)*</p>
            <input name='password1' type="password" placeholder='비밀번호' />
            <input type="password" placeholder='비밀번호 확인' />
            <p>닉네임(12자 이하)*</p>
            <input type="text" placeholder='닉네임(12자 이하)*' />
            <p>휴대전화번호(숫자만)</p>
            <div className='checkinput'>
                <select>
                    <option value='1'>+82</option>
                    <option value='2'>+92</option>
                    <option value='3'>+102</option>
                </select>
                <input name='password3' type='password' placeholder='숫자만' />
            </div>
            <div className='topBox'>
                <input type='checkbox' />
                <span>전체 이용약관에 동의</span>
            </div>
            <div className='bottomBox'>
                <div>
                    <input type='checkbox'/>
                    <span>전체 이용약관에 동의<spam className='must'>(필수)</spam></span>
                </div>
                <div>
                    <input  type='checkbox' />
                    <span>전체 이용약관에 동의<spam className='must'>(필수)</spam></span>
                </div>
                <div>
                    <input type='checkbox' />
                    <span>전체 이용약관에 동의<spam className='must'>(필수)</spam></span>
                </div>
            </div>
            <button>입력완료</button>
        </SignUpBlock>
    )
}

export default MembershipSignUp;