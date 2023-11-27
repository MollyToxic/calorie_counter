import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Entrance = function () {
  const [inputValueLogin, setinputValueLogin] = useState('');
  const [inputValuePassword, setinputValuePassword] = useState('');
  return (
    <div className="entrance">
      <h1 className="form_h1">NutriHype</h1>
      <div className="form">
        <div className="form_conteiner_input">
          <Input inputValue={inputValueLogin} onChange={setinputValueLogin} title="Логин" type="text" />
          <Input inputValue={inputValuePassword} onChange={setinputValuePassword} title="Пароль" type="password" />
        </div>

        <div className="container_link_btn">
          <Button  title="войти" link="/main" />
          <Button title="зарегистрироваться" link="/registration" />
        </div>
      </div></div>

  )
}

export default Entrance;