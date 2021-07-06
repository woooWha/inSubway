import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBlock = styled.div`
    width: 400px;
    height: 560px;
    background: black;
    border-radius: 8px;
    margin-top: 40px;
    padding: 30px;
    box-sizing: border-box;
    color: white;
    a {
        text-decoration: none;
    }
    span {
        font-size: 12px;
    }
    h1 {
        margin-bottom: 16px;
    }
    input{
        width:340px;
        padding: 12px;
        outline: none;
        border: none;
        background: #585858;
        border-radius:6px;
        box-sizing: border-box;
        ::placeholder{
            color: #8C8C8C;
        }
    }
    input[type=password]{
        margin: 12px 0px 32px 0px;
    }
    button{
        width:340px;
        padding: 12px;
        border-radius: 6px;
        background: #77DAFF;
        color: #656565;
        border: none;
    }
    .help {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    input[type=checkbox]{
        width: 10px;
        height: 10px;
    }
    .find {
        color: white;
        font-size: 14px;
    }
    .facebook {
        font-size: 12px;
        margin-bottom: 12px;
    }
    .membership {
        font-size: 12px;
    }
    .membership span {
        color: white;
    }
`

const LoginLogin = () => {
    return (
        <LoginBlock>
            <h1>로그인</h1>
            <form>
                <input type="text" placeholder='이메일 주소 또는 전화번호'/>
                <input type="password" placeholder='비밀번호'/>
                <button>로그인</button>
            </form>
            <div className="help">
                <div className="left">
                    <input type='checkbox' />
                    <span>로그인 정보 저장</span>
                </div>
                <Link to="/findpassword">
                    <span className='find'>
                        도움이 필요하신가요?
                    </span>
                </Link>
            </div>
            <div className='facebook'>
                🌐Facebook으로 로그인
            </div>
            <div className='membership'>
                지옥철에서 회원이 아닌가요? 
                <Link to='/membership'>
                    <span>
                        지금 가입하세요   
                    </span>
                </Link>
            </div>
        </LoginBlock>
    )
}

export default LoginLogin