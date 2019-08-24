import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setTamanhoPedido } from "../../redux/actions";
import api from "../../services/api";

export default function Tamanho(props) {
  const [tamanhos, setTamanhos] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("/tamanho").then(res => {
      setTamanhos(res.data);
    });
  }, []);

  const escolherTamanho = () => {
    if (radioValue === "") {
      return alert("Selecione ao menos uma opção");
    }
    const obj = tamanhos.filter(tamanho => tamanho.id === parseInt(radioValue));
    dispatch(setTamanhoPedido(obj[0].id, obj[0].nome));
    props.history.push("/massa");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }
  return (
    <div className="fundo_inicio">
      <div>
        <h1>Tamanho</h1>

        <ul>
          {tamanhos.map(tamanho => (
            <li key={tamanho.id}>
              <input
                type="radio"
                name="tamanho"
                id={tamanho.id}
                value={tamanho.id}
                onChange={e => setRadioValue(e.target.value)}
              />
              <label htmlFor={tamanho.id}>{tamanho.nome}</label>
            </li>
          ))}
        </ul>
        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/sugestao")}>
            Voltar
          </button>
          <button type="button" onClick={escolherTamanho}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
