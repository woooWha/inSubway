import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    .list-two-title{
        font-size: 24px;
        font-weight: bold;
        color: white;
        margin: 0 0 20px 20px;
    }
    .detailmore-two {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        color: white;
        font-weight: bold;
        font-size: 36px;
        position: absolute;
        left: 448px;
        bottom: -1340px;
        :hover {
            background: rgba(100,100,100,0.8);
        }
    }
`

export const List2Block = styled.div`
    width: 901px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;

`