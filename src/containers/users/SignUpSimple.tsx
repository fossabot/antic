import axios from "instance/axios";
import React, { useState } from "react";

import config from "../../config/index.json";

function SignUpSimple() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post("user/register", {
      name,
      email,
      password,
    });
  };

  const handleCredentialsTest = () => {
    setName(config.testUser.name);
    setEmail(config.testUser.email);
    setPassword(config.testUser.password);
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSignUp(e)}>
          <label>
            昵称：
            <input
              name="name"
              type="text"
              value={name}
              placeholder="请输入昵称"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            邮箱：
            <input
              name="email"
              type="text"
              value={email}
              placeholder="请输入邮箱"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            密码：
            <input
              name="password"
              type="password"
              value={password}
              placeholder="请输入密码"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="注册" />
        </form>
      </div>
      <div>
        <ul>
          <li>昵称：{config.testUser.name}</li>
          <li>邮箱：{config.testUser.email}</li>
          <li>密码：{config.testUser.password}</li>
        </ul>
        <button onClick={handleCredentialsTest}>一键填入测试用户凭证</button>
      </div>
    </>
  );
}

export default SignUpSimple;
