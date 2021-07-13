const nodemailer = require("nodemailer");

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
        "user": "9d99d2c7ed4354",
        "pass": "6b8bfae9494ec0"
    }
}

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error,info){
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
}