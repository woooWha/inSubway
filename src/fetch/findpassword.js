import { useHistory } from "react-router-dom";

const nodemailer = require("nodemailer");




export const fetchFindPassword = async ({email}) => {
    const host_email = {
        "host": "smtp.mailtrap.io",
        "port": 2525,
        "secure": false,
        "auth": {
            "user": "9d99d2c7ed4354",
            "pass": "6b8bfae9494ec0"
        }
    }
    const send = async (data) => {
        nodemailer.createTransport(host_email).sendMail(data, function(error,info){
            if(error){
                console.log(error);
            } else {
                console.log(info);
                return info.response;
            }
        });
    }
    const subPassword =Math.floor((Math.random()*100000));
    const content = {
        from: "b7b86d4861-55d40e@inbox.mailtrap.io",
        to: `${email}`,
        subject: "inSubway",
        text: `임시 비밀번호는 ${subPassword}입니다`
    };

    const response = await fetch("http://localhost:4001/users");
    const history =useHistory;
    if(response.ok){
        const users = await response.json();
        const user = users.find((user) => user.email === email);
        if(user) {return(
            alert('해당 이메일에 임시 비밀번호를 보냈습니다'),
            send(content)
            )
        } else {
            alert('존재하지 않는 이메일입니다.')
        }
    }
    throw new Error("통신이 원할하지 않습니다.");
};