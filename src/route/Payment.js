import React from 'react';
import styled from 'styled-components';
import HomeFooter from '../components/HomeFooter';
import PaymentPurchase from '../components/PaymentPurchase';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .paymentWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-align: center;
        width: 100%;
        min-height: 100vh;
        background: black;
    }
`;

const PaymentBlock = styled.div`
    background: black;
    a {
        text-decoration:none;
    }
    .logo {
        width: 1210px;
        font-size: 24px;
        color: white;
        margin: 0 auto;
    }
`

const Payment = () => {
    return (
        <div className="paymentWrap">
            <GlobalStyle />
            <PaymentBlock>
                <Link to='/'>
                    <h1 className='logo'>
                        지옥철에서
                    </h1>
                </Link> 
                <PaymentPurchase />
                <HomeFooter className='paymentfooter'/>
            </PaymentBlock>
        </div>

    )
}

export default Payment;