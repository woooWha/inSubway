import styled from "styled-components"

export const Item2Block = styled.div`
    height: 360px;
    background: #2F2F2F;
    border-radius: 12px;
    img {
        width: 100%;
    }
    .one {
        color: skyblue;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .two {
        color: white;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .two span {
        border: 1px solid white;
        padding: 1px 4px;
        margin-right: 8px;
    }
    p {
        color:rgba(100,100,100,1)
    }
    .itembottom {
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
`