import React from 'react';
import styled from 'styled-components';
import leftimg from '../엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'

const PurchaseBlock = styled.div`
    background: #2F2F2F;
    width: 100%;
    height: 617px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    .pur-background {
        width: 100vh;
        background: #2F2F2F;
    }
    .content {
        display: flex;
    }
    h1 {
        color: white;
        font-size: 26px;
        margin: 12px 0 48px 0;
    }
    img {
        width: 304px;
        height: 160px;
        margin-right: 48px;
        border-radius: 12px;
    }
    .left-bottom {
        padding: 14px 18px;
        width: 240px;
        background: white;
        border-radius: 8px;
        text-align: center;
        position: relative;
        bottom: 24px;
        left: 14px;
    }
    p {
        margin: 0;
    }
    .bottom-title {
        font-weight: bold;
        margin-bottom: 8px;
        font-size: 14px;
    }
    .bottom-p {
        font-size: 12px;
    }
    .right {
        height: 400px;
        background: white;
        padding: 18px;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        position: relative;
    }
    .right-title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 48px;
    }
    .check {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }
    .check span {
        font-size: 12px;
    }
    input[type=checkbox]{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 12px;
    }
    .right-check {
        margin-bottom: 32px;
    }
    .coupon {
        color: skyblue;
        text-decoration: underline;
        padding: 8px 16px;
        border-radius: 8px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        background: #F3F4F6;
        margin-bottom: 48px;
    }
    .line {
        border-bottom: 1px solid black;
        margin-bottom: 24px;
    }
    .purchase {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }
    .pur-left {
        display: flex;
        flex-direction: column;
    }
    .pur-left-two {
        font-size: 12px;
    }
    button {
        background: #2563EA;
        width: 396px;
        border-radius: 8px;
        color: white;
        padding: 12px;
        position: absolute;
        border: 0;
        bottom: -48px;
        right: 0px;
    }
`

const PaymentPurchase = () => {
    return(
        <PurchaseBlock>
            <div className='pur-background'></div>
            <h1>Complete Purchase</h1>
            <div className='content'>
                <div className='left'>
                    <img src = {leftimg} />
                    <div className='left-bottom'>
                        <p className='bottom-title'>흙수저가 살아남는 생존방식</p>
                        <p className='bottom-p'>돈 버는 진짜 방법</p>
                    </div>
                </div>
                <div className='right'>
                    <p className='right-title'>Payment Options</p>
                    <div className='right-check'>
                        <div className='check'>
                            <input type='checkbox' />
                            <span>국내카드 결제</span>
                        </div>
                        <div className='check'>
                            <input type='checkbox' />
                            <span>카카오 페이</span>
                        </div>
                        <div className='check'>
                            <input type='checkbox' />
                            <span>해외카드 결제</span>
                        </div>
                    </div>
                    <p className='coupon'>Do you have a coupon ? Click here to use it!</p>
                    <div className='line'></div>
                    <div className='purchase'>
                        <div className='pur-left'>
                            <span>최종 가격:</span>
                            <span className='pur-left-two'>할부 결제 가능!</span>
                        </div>
                        <div className='pur-right'>
                            23000원/월
                        </div>
                    </div>
                    <button>Pay now</button>
                </div>
            </div>
        </PurchaseBlock>
    )
}

export default PaymentPurchase;