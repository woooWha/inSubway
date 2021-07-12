import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
const[email,setEmail] = useState('');
const[nickname,setNickname] = useState('');
const[pw,setPw] = useState('');
const[re_pw,setRe_pw] = useState('');
const[emailCheck,setEmailCheck] = useState('');
const[nicknameCheck,setNicknameCheck] = useState("");
const[pwCheck,setPwCheck] =useState("");

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const checkEmail = e => {
        e.preventDefault();
        const chkEmail = function(str){
            var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return regExp.test(str) ? true : false;
        };

        const inputEmail = {
            email: email
        };
        const email_info = {
            method: "POST",
            body: JSON.stringify(inputEmail),
            headers: {
                "content-Type": "application/json"
            }
        };
        if(chkEmail(email) === false) {
            alert("이메일 형식이 유효하지 않습니다.");
            setEmail({email:""});
        } else {
            fetch("http://localhost:4000/users", email_info)
            .then(res => res.json())
            .then(json => {
                if(json === true){
                    alert("사용가능 한 아이디입니다");
                    setEmailCheck(email);
                } else {
                    alert("이미 존재하는 아이디입니다");
                }
            })
        }
    }


    const handleNickname = e => {
        e.preventDefault();
        setNickname(e.target.value);
    };
    //닉네임 중복검사
    const checkNickname = e => {
        e.preventDefault();
        const chkNickname = function(str) {
        var regNm = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
        return regNm.test(str) ? true : false;
        };
        const inputNickname = {
        nickname: nickname
        };
        const nickname_info = {
        method: "POST",
        body: JSON.stringify(inputNickname),
        headers: {
            "Content-Type": "application/json"
        }
        };
        if (chkNickname(nickname) === false) {
        alert("한글,영문 대소문자 2~15자리만 사용 가능합니다");
        } else {
        fetch("http://localhost:9089/user/nick", nickname_info)
            .then(res => res.json())
            .then(json => {
            if (json === true) {
                alert("사용 가능한 닉네임입니다.");
                setNickname(nickname);
            } else {
                alert("이미 존재하는 닉네임입니다.");
            }
            });
        }
    };


    const handlePw = e => {
        e.preventDefault();
        setPw(e.target.value)
    };
    const handleRe_pw = e => {
        e.preventDefault();
        setRe_pw(e.target.value)
    };

    const checkPw = e => {
        e.preventDefault();
        const chkPwd = function(str){
            var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
            return !reg_pwd.test(str) ? false: true;
        };
        if(chkPwd(re_pw)===false){
            alert("영문,숫자를 혼합하여 06~20자 이내");
            setPw("");
            setRe_pw("");
        } else {
            if(pw===re_pw){
                alert("일치합니다.");
                setPwCheck(re_pw);
            } else {
                alert("비밀번호가 불일치합니다.")
            }
        };
    }

    const handleSubmit = e => {
        e.preventDefault();
        checkEmail(e);
        checkNickname(e);
        checkPw(e);
        const signupInfo = {
            email: emailCheck,
            pw: pwCheck,
            nickname: nicknameCheck
        };
        const signup_info = {
            method: "post",
            body: JSON.stringify(signupInfo),
            headers: {
                "Content-Type": "application/json"
            }
        };
        if(
            email &&
            nickname &&
            pw &&
            re_pw &&
            email === emailCheck &&
            nickname === nicknameCheck &&
            pw === re_pw &&
            re_pw === pwCheck
        ) {
            fetch("http://localhost:4000/users", signup_info)
                .then(alert("가입이 완료되었습니다"))
                .then(history.push("./login"));
        } else {
            alert("입력값을 확인해주세요");
        }
    };



    return (
        <SignUpBlock>
            <h1 className='signUp'>SIGN UP</h1>
            <p>이메일 주소 확인</p>
            <input type='text' onChange={handleEmail} value={email} placeholder='이메일'/>
            <p className='text-gray'>인증이 필요하니 정확한 이메일을 입력해주세요</p>
            <p>비밀번호(10~16,영어+숫자 조합)*</p>
            <input name='password1' type="password" placeholder='비밀번호' />
            <input type="password" placeholder='비밀번호 확인' />
            <p>닉네임(12자 이하)*</p>
            <input type="text" onChange={handleNickname} value={nickname} placeholder='닉네임(12자 이하)*' />
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
            <button onClick={handleSubmit}>입력완료</button>
        </SignUpBlock>
    )
}

export default MembershipSignUp;