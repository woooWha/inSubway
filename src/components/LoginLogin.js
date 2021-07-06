import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBlock = styled.div`
    width: 400px;
    height: 560px;
    background: black;
    border-radius: 8px;
    margin: 40px auto;
    padding: 30px;
    box-sizing: border-box;
    color: white;
    h1 {
        margin: 0;
        margin-bottom: 16px;
    }
    input{
        width:340px;
        padding: 12px;
        outline: none;
        border: none;
        background: #585858;
        border-radius:6px;
        ::placeholder{
            color: #8C8C8C;
        }
        box-sizing: border-box;
    }
    input[type=password]{
        margin: 12px 0px 32px 0px;
    }
    button{
        width:340px;
        background: #77DAFF;
        border-radius: 6px;
        color: #656565;
        padding: 12px;
        border: none;
    }
    input[type=checkbox]{
        width: 10px;
        height: 10px;
    }
    span {
        font-size: 12px;
    }
    .help {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    .facebook {
        font-size: 12px;
        margin-bottom: 12px;
    }
    .subway {
        font-size: 12px;
    }
    .lol {
        font-size: 14px;
        color: white;
        text-decoration: none;
    }
    .find {
        color: white;
        text-decoration: none;
        font-size: 14px;
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
                <Link to="/findpassword" className='find'>도움이 필요하신가요?</Link>
            </div>
            <div className='facebook'>
                🌐Facebook으로 로그인
            </div>
            <div className='subway'>
                지옥철에서 회원이 아닌가요? <Link to='/membership' className='lol'>지금 가입하세요</Link>
            </div>
        </LoginBlock>
    )
}

export default LoginLogin