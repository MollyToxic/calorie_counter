import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Entrance = function () {
  const [inputValueLogin, setinputValueLogin] = useState('');
  const [inputValuePassword, setinputValuePassword] = useState('');
  return (
    <div className="form">
         <Input inputValue={inputValueLogin} onChange={setinputValueLogin} title="Логин" type="text" />
      <Input inputValue={inputValuePassword} onChange={setinputValuePassword} title="Пароль" type="password" />
      <div className="btn_flex">      <Button title="войти" link="/main" />
        <Button title="зарегистрироваться" link="/registration" /></div>

    </div>
  )
}

export default Entrance;