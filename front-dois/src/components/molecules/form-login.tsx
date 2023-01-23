import { FormEvent } from "react";
import { LoginPage } from "./styled";

export  function FormLogin() {
  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const loginPayLoad = {
      email: e.currentTarget.email.value ,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayLoad);
  }
  return (
    <LoginPage>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="e-mail" name="email" />
        <input placeholder="password" name="password" />
        <button type="submit"> Sign In</button>
      </form>
    </LoginPage>
  );
}
