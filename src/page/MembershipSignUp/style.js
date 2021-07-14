import styled from "styled-components"
export const SignUpBlock = styled.div`
    width: 360px;
    height: 560px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    color: white;
    .text-gray {
        color: rgba(100,100,100,0.6)
    }
    .signUp{
        text-align:center;
        font-size: 26px;
        margin-bottom: 36px;
    }
    p{
        font-size: 14px;
        font-weight: bold;
        margin: 8px 0;
    }
    input{
        background: #181816;
        border: none;
        outline: none;
        padding: 14px;
        border-radius: 4px;
        ::placeholder{
            color: rgba(100,100,100,0.6);
        }
    }
    input[name=password1]{
        margin-bottom: 8px;
    }
    .checkinput{
        background: #181816;
        padding: 14px;
        border-radius: 6px;
        margin-bottom: 32px;
    }
    input[name=password3]{
        padding: 0px;
    }
    select {
        background: transparent;
        color: white;
        border:none;
        outline: none;
        margin-right: 20px;
        option {
            color: white;
            background: black;
        }
    }
    .topBox{
        margin-bottom: 24px;
        font-size: 14px;
    }
    .bottomBox{
        font-size: 12px;
        padding-left: 24px;
        margin-bottom: 48px;
    }
    .bottomBox .must{
        color: rgba(100,100,100,0.8);
    }
    button {
        padding: 14px;
        background: #FFFFFF;
        font-weight: bold;
        border-radius: 8px;
    }
`