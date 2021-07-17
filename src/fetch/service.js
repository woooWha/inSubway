export const fetchLogin = async ({email,password}) => {
    const response = await fetch("http://localhost:3001/users");

    if(response.ok){
        const users = await response.json();
        const user = users.find((user) => user.email === email);
        if(!user || user.password !== password) {
            return alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else {
        return user;
        }
    }
    throw new Error("서버 통신이 원할하지 않습니다.");
};