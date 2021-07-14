import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import {fetchLogin} from '../../fetch/service'
import { setUseProxies } from 'immer';
import {LoginBlock} from './style';



const LoginLogin = () => {

    const history = useHistory();
    const[userData,setUserData] = useState(null);
    const[account, setAccount] = useState({
        email:"",
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
                <input id='email' name='email' placeholder='이메일을 입력해주세요' onChange={onChangeAccount} />
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

/*
const onSubmit= (e) => {
    e.
    
    Default();
    if(checkEmail(email)) find 쓰기;
    
}
*/