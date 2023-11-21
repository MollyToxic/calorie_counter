import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Entrance = function () {
  const [inputValueLogin, setinputValueLogin] = useState('');
  const [inputValuePassword, setinputValuePassword] = useState('');
  return (
    <div className="form">
      <Input inputValue={inputValueLogin} onChange={setinputValueLogin} title="логин"/>
      <Input inputValue={inputValuePassword}  onChange={setinputValuePassword} title="пароль" />
      <Button  title="войти" link="/main"/>
      <Button  title="зарегистрироваться"  />
      <></>
    </div>
  )
}

export default Entrance;