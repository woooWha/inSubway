import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.div`
    display: flex;
    color: white;
    padding: 30px 40px;
    .left {
        width: 70%;
        padding-right: 60px;
    }
    .right {
        width: 30%;
    }
    span {
        font-size: 14px;
    }
    p {
        font-size: 14px;
    }
    .left-top {
        margin-bottom: 30px;
        font-weight: bold;
    }
    .left-top span {
        margin-right: 8px;
        font-size: 15px;
    }
    .left-top-color {
        color: #44CD66;
    }
    .left-top-box {
        border: 1px solid white;
        padding: 2px 5px;
    }
    .right span {
        color: rgba(100,100,100,0.8)
    }
    .right {
        position: relative;
        bottom: 30px;
    }
`

const DetailText = () => {
    return (
        <TextBlock>
            <div className="left">
                <div className='left-top'>
                    <span className='left-top-color'>97%일치</span>
                    <span>2018</span>
                    <span className='left-top-box'>15+</span>
                    <span>시즌 2개</span>
                    <span className='left-top-box'>HD</span>
                </div>
                <div>
                    소리에서 단서를 찾는 '보이스 프로파일러'의 세계. 112
                    신고센터장 권주와 열혈 형사 진혁이 생사의 갈림길에 선
                    사람들을 구하기 위해 작은 소리 하나도 놓치지 않는다.
                    골든타임의 경계를 넘나드는 그들의 활약. 오늘도 출동이다.
                </div>
            </div>
            <div className="right">
                <p><span>출연:</span>이하나, 이진욱, 장혁, 더보기</p>
                <p><span>장르:</span>TV 프로그램 범죄, 한국 드라마, TV프로그램 스릴러</p>
                <p><span>프로그램 특징:</span>다크, 긴장감 넘치는</p>
            </div>
        </TextBlock>
    )
}
export default DetailText;