import styled from "styled-components"

export const FindMiddleBlock = styled.div`
    margin-top: 100px;
    width: 400px;
    text-align:center;
    color: white;
    margin-bottom: 40px;
    h1{
        font-size: 24px;
        margin-bottom: 60px;
    }
    input{
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid rgba(100,100,100,0.6);
        margin-bottom: 16px;
        border-radius: 6px;
        outline: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	 transition: background-color 5000s ease-in-out 0s;
	 -webkit-transition: background-color 9999s ease-out;
     -webkit-text-fill-color: white !important;
     -webkit-text-fill-background-color: #585858;
   }
    button{
        width: 100%;
        padding: 16px;
        border: none;
        background: transparent;
        color: skyblue;
        border: 1px solid skyblue;
        border-radius: 6px;
        font-weight: bold;
        cursor:pointer;
    }
    .findButton {
        margin-bottom: 100px;
    }
`
