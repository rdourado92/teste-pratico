import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { setTipoPedido } from "../../redux/actions";

export default function Tipo(props) {
  const [tipos, setTipos] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/tipo").then(res => {
      setTipos(res.data);
    });
  }, []);

  const escolherTipo = () => {
    if (radioValue === "") {
      return alert("Selecione ao menos uma opção");
    }
    const obj = tipos.filter(tipo => tipo.id === parseInt(radioValue));
    dispatch(setTipoPedido(obj[0].id, obj[0].nome));
    props.history.push("/sabor");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }
  return (
    <div className="fundo_inicio">
      <div>
        <h1>Tipos</h1>

        <ul>
          {tipos.map(tipo => (
            <li key={tipo.id}>
              <input
                type="radio"
                id={tipo.id}
                name="tipo"
                value={tipo.id}
                onChange={e => setRadioValue(e.target.value)}
              />
              <label htmlFor={tipo.id}>{tipo.nome}</label>
            </li>
          ))}
        </ul>
        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/massa")}>
            Voltar
          </button>
          <button type="button" onClick={escolherTipo}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
