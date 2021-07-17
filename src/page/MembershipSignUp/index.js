import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {fetchSignup} from '../../fetch/signup'
import {SignUpBlock} from './style';


const MembershipSignUp = () => {
    //회원가입 서버
    const history = useHistory();
    const[accountTwo,setAccountTwo] = useState({
        id: "",
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
        try {if(chkone && chktwo){
            await fetchSignup(accountTwo);
            fetch("http://localhost:3001/users", accountTwo_info)
            .then(history.push('./login'))}
        } catch (error) {
            window.alert('회원가입에 실패했습니다.')
        }
    };
    
    //이용약관 동의 체크

    const checkBoxRef = useRef(null);
    const[chkzero,setchkZero] = useState(false);
    const[chkone,setchkOne] = useState(false);
    const[chktwo,setchkTwo] = useState(false);
    const[chkthree,setchkThree] = useState(false);
    const zerocheckToggle = () => {
        setchkZero(!chkzero)
    }
    const onecheckToggle = () => {
        setchkOne(!chkone)
    }
    const twocheckToggle = () => {
        setchkTwo(!chktwo)
    }
    const threecheckToggle = () => {
        setchkThree(!chkthree)
    }
    const Alltoggle = () => {if(chkone === false && chktwo === false && chkthree === false)
        {setchkOne(true);
        setchkTwo(true);
        setchkThree(true)} else {
            setchkOne(false);
            setchkTwo(false);
            setchkThree(false);
        }
    }
    
    const toggleAll = () => {if(chkone && chktwo && chkthree)  
        {setchkZero(true)} else setchkZero(false)}

    const buttonOn =() => {if(chkone && chktwo){
        checkBoxRef.current.style.background = '#005CC8'
    }else {checkBoxRef.current.style.background = '#FFFFFF'}}

    useEffect(() => {toggleAll(); buttonOn();})

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
                <input onClick={() => {zerocheckToggle(); Alltoggle();}}  checked={chkzero} id="userCheckZero" type='checkbox' />
                <label for="userCheckZero">전체 이용약관에 동의</label>
            </div>
            <div className='bottomBox'>
                <div>
                    <input onClick={() => {onecheckToggle();}}  checked={chkone} id="userCheck" type='checkbox'/>
                    <label for="userCheck">이용약관에 동의<label className='must'>(필수)</label></label>
                </div>
                <div>
                    <input onClick={() => {twocheckToggle();}}  checked={chktwo} id="userCheckTwo"  type='checkbox' />
                    <label for="userCheckTwo">이용약관에 동의<label className='must'>(필수)</label></label>
                </div>
                <div>
                    <input onClick={() => {threecheckToggle();}}  checked={chkthree} id="userCheckThree" type='checkbox' />
                    <label for="userCheckThree">이용약관에 동의<label className='must'>(선택)</label></label>
                </div>
            </div>
            <button ref={checkBoxRef} onClick={onSubmitAccount}>입력완료</button>
        </SignUpBlock>
    )
}

export default MembershipSignUp;