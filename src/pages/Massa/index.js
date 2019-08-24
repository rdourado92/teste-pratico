import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { setMassaPedido } from "../../redux/actions";

export default function Massa(props) {
  const [massas, setMassas] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/massa").then(res => {
      setMassas(res.data);
    });
  }, []);

  const escolherMassa = () => {
    if (radioValue === "") {
      return alert("Selecione ao menos uma opção");
    }
    const obj = massas.filter(massa => massa.id === parseInt(radioValue));
    dispatch(setMassaPedido(obj[0].id, obj[0].nome));
    props.history.push("/tipo");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }

  return (
    <div className="fundo_inicio">
      <div>
        <h1>Massas</h1>

        <ul>
          {massas.map(massa => (
            <li key={massa.id}>
              <input
                type="radio"
                id={massa.id}
                name="massa"
                value={massa.id}
                onChange={e => setRadioValue(e.target.value)}
              />
              <label htmlFor={massa.id}>{massa.nome}</label>
            </li>
          ))}
        </ul>
        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/tamanho")}>
            Voltar
          </button>
          <button type="button" onClick={escolherMassa}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
