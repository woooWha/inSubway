import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import {fetchLogin} from '../service';
import { setUseProxies } from 'immer';


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

    const history = useHistory();
    const[userData,setUserData] = useState(null);
    const[account, setAccount] = useState({
        id:"",
        password:""
    });
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitAccount = async () => {
        try {
            const user = await fetchLogin(account);
            setUserData(user);
            history.replace("/");
        } catch (error) {
            window.alert('아이디나 비밀번호가 일치하지 않습니다');
        }
    };

    return (
        <LoginBlock>
            <h1>로그인</h1>
            <form>
                <input id='id' name='id' placeholder='아이디를 입력해주세요' onChange={onChangeAccount} />
                <input id='password' name='password' type="password" placeholder='비밀번호를 입력해주세요' onChange={onChangeAccount} />
                <button onClick={onSubmitAccount}>로그인</button>
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