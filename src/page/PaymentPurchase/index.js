import React from 'react';
import styled from 'styled-components';
import leftimg from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import {PurchaseBlock} from './style';

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