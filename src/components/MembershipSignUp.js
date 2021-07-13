import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {fetchSignup} from '../signup'

const SignUpBlock = styled.div`
    width: 360px;
    height: 560px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    color: white;
    .text-gray {
        color: rgba(100,100,100,0.6)
    }
    .signUp{
        text-align:center;
        font-size: 26px;
        margin-bottom: 36px;
    }
    p{
        font-size: 14px;
        font-weight: bold;
        margin: 8px 0;
    }
    input{
        background: #181816;
        border: none;
        outline: none;
        padding: 14px;
        border-radius: 4px;
        ::placeholder{
            color: rgba(100,100,100,0.6);
        }
    }
    input[name=password1]{
        margin-bottom: 8px;
    }
    .checkinput{
        background: #181816;
        padding: 14px;
        border-radius: 6px;
        margin-bottom: 32px;
    }
    input[name=password3]{
        padding: 0px;
    }
    select {
        background: transparent;
        color: white;
        border:none;
        outline: none;
        margin-right: 20px;
        option {
            color: white;
            background: black;
        }
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
    const history = useHistory();
    const[accountTwo,setAccountTwo] = useState({
        email: "",
        password: "",
        passwordTwo: "",
        nickname: "",
        phoneNumber: ""
    })

    const onChangeAccount = (e) => {
        setAccountTwo({
            ...accountTwo,
            [e.target.name]: e.target.value
        });
    };

    const accountTwo_info = {
        method: "POST",
        body: JSON.stringify(accountTwo),
        headers: {
            "Content-Type":"application/json"
        }
    };

    const onSubmitAccount = async() => {
        try {
            await fetchSignup(accountTwo);
            fetch("http://localhost:4001/users", accountTwo_info)
            .then(history.replace('./login'))
        } catch (error) {
            window.alert('회원가입에 실패했습니다.')
        }
    };

    return (
        <SignUpBlock>
            <h1 className='signUp'>SIGN UP</h1>
            <p>이메일 주소 확인</p>
            <input id="email" name='email' onChange={onChangeAccount} type='text' placeholder='이메일'/>
            <p className='text-gray'>인증이 필요하니 정확한 이메일을 입력해주세요</p>
            <p>비밀번호(10~16,영어+숫자 조합)*</p>
            <input id="password" name='password' onChange={onChangeAccount} type="password" placeholder='비밀번호' />
            <input id="passwordTwo" name='passwordTwo' onChange={onChangeAccount} type="password" placeholder='비밀번호 확인' />
            <p>닉네임(12자 이하)*</p>
            <input id="nickname" name='nickname' onChange={onChangeAccount} type="text" placeholder='닉네임(12자 이하)*' />
            <p>휴대전화번호(숫자만)</p>
            <div className='checkinput'>
                <select>
                    <option value='1' selected>+82</option>
                    <option value='2'>+92</option>
                    <option value='3'>+102</option>
                </select>
                <input id="phoneNumber" name='phoneNumber' onChange={onChangeAccount} type='password' placeholder='숫자만' />
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
            <button onClick={onSubmitAccount}>입력완료</button>
        </SignUpBlock>
    )
}

export default MembershipSignUp;