import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 560px;
    height: 256px;
    color: gray;
    margin-bottom: 20px;
    margin-top: 60px;
    background: black;
    .middle div {
        cursor: pointer;
    }
    p {
        font-size: 14px;
        margin-bottom: 24px;
    }
    .middle {
        display: grid;
        grid-template-columns: 25fr 25fr 25fr 25fr;
    }
    .middle div {
        font-size: 8px;
        width: 100%;
        margin-bottom: 20px;
    }
    select {
        background: transparent;
        color: white;
        outline: none;
        padding: 10px 20px;
        border-radius: 8px;
        width: 120px;
    }
    .footer-background{
        width: 100%;
        height: 280px;
        background: black;
        position: absolute;
        left:0;
        z-index: -1;
    }
    option {
        background: black;
        color: white;
    }
`

const HomeFooter = () => {
    return (
        <FooterBlock>
            <div className='footer-background'></div>
            <p>질문이 있으신가요? 문의 전화: 00-308-321-0058</p>
            <div className="middle">
                <div>자주 묻는 질문</div>
                <div>고객 센터</div>
                <div>계정</div>
                <div>미디어 센터</div>
                <div>투자 정보</div>
                <div>입사 정보</div>
                <div>넷플릭스 지원 디바이스</div>
                <div>이용 약관</div>
                <div>개인 정보</div>
                <div>속도 테스트</div>
                <div>쿠키 설정</div>
                <div>회사 정보</div>
                <div>문의하기</div>
                <div>속도 테스트</div>
                <div>법적고지</div>
                <div>넷플릭스 오리지날</div>
            </div>
            <select name='language' form='myform'>
                <option value='1' selected>한국어</option>
                <option value='2'>영어</option>
                <option value='3'>중국어</option>
                <option value='4'>일본어</option>
            </select>
        </FooterBlock>
    )
}

export default HomeFooter;