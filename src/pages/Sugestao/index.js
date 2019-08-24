import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { setPedidoSugerido } from "../../redux/actions";

export default function Sugestao(props) {
  const [tamRandom, setTamRandom] = useState("");
  const [masRandom, setMasRandom] = useState("");
  const [tipoRandom, setTipoRandom] = useState("");
  const [sabRandom, setSabRandom] = useState("");
  const [borRandom, setBorRandom] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSugestao = async () => {
      const tamanho = await api.get("/tamanho");
      setTamRandom(getRandom(tamanho.data));

      const massa = await api.get("/massa");
      setMasRandom(getRandom(massa.data));

      const tipo = await api.get("/tipo");
      setTipoRandom(getRandom(tipo.data));

      const sabor = await api.get("/sabor?id_tipo=" + tipoRandom.id);
      setSabRandom(getRandom(sabor.data));

      const borda = await api.get("/borda?id_tipo=" + tipoRandom.id);
      setBorRandom(getRandom(borda.data));
    };

    loadSugestao();
  }, [tipoRandom.id]);

  const getRandom = data => data[Math.floor(Math.random() * data.length)];

  const escolherSugestao = () => {
    const obj = {
      idTamanho: tamRandom.id,
      tamanho: tamRandom.nome,
      idMassa: masRandom.id,
      massa: masRandom.nome,
      idTipo: tipoRandom.id,
      tipo: tipoRandom.nome,
      idSabor: sabRandom.id,
      sabor: sabRandom.nome,
      idBorda: borRandom.id,
      borda: borRandom.nome
    };
    dispatch(setPedidoSugerido(obj));

    props.history.push("/confirmacao");
  };

  if (!borRandom) {
    return (
      <div className="fundo_inicio">
        <div>
          <h1>Loading...</h1>;
        </div>
      </div>
    );
  }

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }
  return (
    <div className="fundo_inicio">
      <div>
        <h1>Sugestão do dia</h1>
        <ul>
          <li>
            <span>Tamanho: {tamRandom.nome}</span>
          </li>
          <li>
            <span>Massa: {masRandom.nome}</span>
          </li>
          <li>
            <span>Tipo: {tipoRandom.nome}</span>
          </li>
          <li>
            <span>Sabor: {sabRandom.nome}</span>
          </li>
          <li>
            <span>Borda: {borRandom.nome}</span>
          </li>
        </ul>
        <div className="comandos">
          <button type="button" onClick={escolherSugestao}>
            Escolher a sugestão
          </button>
          <Link to="/tamanho">Montar a sua</Link>
        </div>
      </div>
    </div>
  );
}
