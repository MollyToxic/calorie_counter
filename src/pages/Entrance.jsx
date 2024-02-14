import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Entrance = function () {
  const [inputValueLogin, setinputValueLogin] = useState('');
  const [inputValuePassword, setinputValuePassword] = useState('');


  // получение токена с сервера...
  // const getCSRFToken = async () => {
  //   try {
  //     const response = await fetch('страничка с которой мы забираем токен');
  //     const csrfToken = response.headers.get('x-csrftoken');
  //     console.log(csrfToken);
  //     return csrfToken
  //   } catch (error) {
  //     console.error('Ошибка при получении CSRF-токена:', error);
  //   }
  // };

  // достаём токен из промиса
//   const csrfToken = getCSRFToken();

//   async function loginUser(){
//     fetch('http://localhost:8000/api/v1/auth/login/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json; charset=utf-8',
//       'x-crsftokes': csrfToken },
//     body: JSON.stringify({inputValueLogin,inputValuePassword}),
//   })
//     .then((response) => console.log(response.status))
//     console.log(JSON.stringify({ inputValueLogin, inputValuePassword }));
// }

  return (
    <div className="form">
      <div className="cat"></div>
      {/* <img src="logo.jpg" alt="" width="200px" height="500px"/> */}
      <div className="form-container-input"></div>
      <h1>NutriHype</h1>
          <form action="" method="post">
            <Input inputValue={inputValueLogin} onChange={setinputValueLogin} title="Логин" type="text" />
            <Input inputValue={inputValuePassword} onChange={setinputValuePassword} title="Пароль" type="password" />
          </form>
        <div className="form-container-button">
          <Button 
          // click={loginUser}  
          title="войти" 
          link="/main" 
          />
          <Button title="зарегистрироваться" link="/registration" />
        </div>
    </div>

  )
}

export default Entrance;