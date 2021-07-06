import React from 'react';
import styled from 'styled-components';


const FooterBlock = styled.div`
font-weight: bold;
color: white;
margin-top: 60px;
padding: 30px;
.footer-title {
    font-weight: 300;
}
 .one {
     color: rgba(100,100,100, 0.4);
     margin-right: 6px;
 }
 h1 {
     font-size: 24px;
     margin-bottom: 16px;
 }
 p {
     font-size: 14px;
     margin: 0;
     margin-bottom: 6px;
 }
`

const DetailFooter = () => {
    return (
        <FooterBlock>
            <h1>흙수저가 살아남는 생존방식 <span className='footer-title'>상세정보</span></h1>
            <p><span className='one'>크리에이터:</span> 신원호,이우정</p>
            <p><span className='one'>출연:</span> 조정석, 유연석, 정경호, 김대명, 전미드, 김해숙, 김갑수</p>
            <p><span className='one'>장르:</span> 메디컬 TV시리즈, 한국 드라마, TV 드라마</p>
            <p><span className='one'>프로그램 특징:</span> 가슴 뭉클</p>
            <p><span className='one'>관람등급:</span> 15세 이상 관람가</p>
        </FooterBlock>
    )
}

export default DetailFooter;