import { put } from "redux-saga/effects";

import { signinSuccess, signinFailure, setUsuario } from "../actions";
import api from "../../services/api";

export function* login(action) {
  console.log(action);
  const login = yield api.get(
    `/usuario?email=${action.email}&senha=${action.passwd}`
  );

  if (login.data.length === 1) {
    let usuario = {};
    login.data.map(
      user =>
        (usuario = {
          id: user.id,
          nome: user.nome,
          email: user.email,
          pontuacao: user.pontuacao
        })
    );
    localStorage.setItem("id", usuario.id);
    localStorage.setItem("user", usuario.email);
    yield put(signinSuccess(usuario));
    yield put(setUsuario(usuario.id));
  } else {
    yield put(signinFailure("Erro: Usuário e/ou senha inválidos"));
  }
}
