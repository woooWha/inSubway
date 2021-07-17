import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const fetchSignup = async ({email,password,passwordTwo,nickname,phoneNumber}) => {
    const response = await fetch("http://localhost:3001/users");

    const chkEmail = function(str) {
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return regExp.test(str) ? true : false;
    };
    const chkPassword = function(str) {
        var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
        return reg_pwd.test(str) ? true : false;
    };
    const chkPhonenumber = function(str){
        var reg_num = /^\d{3}-\d{3,4}-\d{4}$/;
        return reg_num.test(str) ? true : false ;
    }

    if(response.ok){
        const users = await response.json();
        const user = users.find((user) => user.email === email);
        const user_nickname = users.find((user) => user.nickname === nickname);
        if(chkEmail(!email)){return alert('이메일 조건에 부합하지 않습니다.')}
        if(user){return alert('이미 가입된 이메일이 있습니다.')}
        if(chkPassword(!passwordTwo)){return alert('비밀번호 조건에 부합하지 않습니다.')}
        if(password !== passwordTwo){return alert('비밀번호가 일치하지 않습니다.')}
        if(user_nickname){return alert('중복된 닉네임입니다.')}
        if(chkPhonenumber(!phoneNumber)){return alert('전화번호 조건에 부합하지 않습니다')} else 
        {return window.alert('회원가입이 되었습니다.')} 
        } throw new Error("서버 통신이 원할하지 않습니다.");
};