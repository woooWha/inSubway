import React from 'react';
import styled from 'styled-components';
import HomeFooter from '../components/HomeFooter';
import PaymentPurchase from '../components/PaymentPurchase';
import { Link } from 'react-router-dom';

const PaymentBlock = styled.div`
    background: black;
    .logo {
        margin: 0;
        font-size: 24px;
        color: white;
        margin-left: 320px;
    }
    .paymentfooter{
        margin: 0;
    }
    .logolink {
        text-decoration: none;
    }
`

const Payment = () => {
    return (
        <PaymentBlock>
            <Link to='/' className='logolink'><h1 className='logo'>지옥철에서</h1></Link> 
            <PaymentPurchase />
            <HomeFooter className='paymentfooter'/>
        </PaymentBlock>
    )
}

export default Payment;