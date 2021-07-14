import styled from "styled-components"

export const TextBlock = styled.div`
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