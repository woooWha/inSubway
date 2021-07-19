import styled from "styled-components"

export const PurchaseBlock = styled.div`
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
        cursor: pointer;
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
        cursor: pointer;
    }
`
