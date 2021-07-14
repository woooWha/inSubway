import styled from "styled-components"

export const FooterBlock = styled.div`
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