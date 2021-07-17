export const fetchFindPassword = async ({email}) => {
    
    const response = await fetch("http://localhost:3001/users");

    if(response.ok){
        const users = await response.json();
        const user = users.find((user) => user.email === email);
        if(user) {return alert('해당 이메일에 임시 비밀번호를 보냈습니다')
        } else 
        alert('존재하지 않는 이메일입니다.')
    } throw new Error("통신이 원할하지 않습니다.");
};