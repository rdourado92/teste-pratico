import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signinRequest } from "../../redux/actions";
import "./style.css";

export default function Inicio(props) {
  const inputUser = useRef();
  const inputPasswd = useRef();

  useSelector(state => {
    const { authReducer } = state;
    if (
      authReducer.logado &&
      authReducer.carregandoLogin === false &&
      localStorage.getItem("user")
    ) {
      props.history.push("/sugestao");
    }

    if (authReducer.erro && authReducer.carregandoLogin === false) {
      alert(authReducer.erroMsg);
    }
    console.log(state, state.type);
  });

  const dispatch = useDispatch();

  const login = () => {
    dispatch(signinRequest(inputUser.current.value, inputPasswd.current.value));
  };

  return (
    <div className="fundo_inicio">
      <form>
        <p>Olá, Insira seus dados de usuário para realizar o pedido.</p>
        <input type="text" placeholder="E-mail de Usuário" ref={inputUser} />
        <input type="password" placeholder="Senha" ref={inputPasswd} />
        <button type="button" onClick={login}>
          Acessar
        </button>
      </form>
    </div>
  );
}
