import styled from "styled-components";

export const ItemBlock = styled.div`
    display: flex;
    color: white;
    padding: 30px 40px;
    border-bottom: 1px solid #404040;
    border-radius: 6px;
    &:hover {
        background: rgba(100,100,100,0.8);
    }
    img {
        width: 128px;
        height: 84px;
        border-radius: 6px;
        margin-right: 12px;
    }
    .left {
        font-size: 18px;
        font-weight: bold;
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
    .right {
        width: 100%;
        height: 100%;
        font-size: 14px;
    }
    .right-top {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 8px;
    }
`