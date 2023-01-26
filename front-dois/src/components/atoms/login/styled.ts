import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00ff7f;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    background-color: #e0ffff;
    margin: solid 1px " blue";
    border: solid 3px;
    border-radius: 10px;
    height: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 50%;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0 0.5rem 0.5rem;
    background-color: #dcdcdc;
    border-radius: 14px;
    border: 1px solid "lightgray";
    margin: 1rem 0;
    font-size: 1.5rem;
    width: 80%;
  }
  button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid "black";
  }

  h2 {
    font-size: 2rem;
    color: #000080;
    font-weight: bold;
  }
`;
