import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { setSaborPedido } from "../../redux/actions";

export default function Sabor(props) {
  const [sabores, setSabores] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();

  const idTipo = useSelector(store => store.pedidoReducer.pizza.idTipo);

  useEffect(() => {
    api.get("/sabor?id_tipo=" + idTipo).then(res => {
      setSabores(res.data);
    });
  }, [idTipo]);

  const escolherSabor = () => {
    if (radioValue === "") {
      return alert("Selecione ao menos uma opção");
    }
    const obj = sabores.filter(sabor => sabor.id === parseInt(radioValue));
    dispatch(setSaborPedido(obj[0].id, obj[0].nome));
    props.history.push("/borda");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }
  return (
    <div className="fundo_inicio">
      <div>
        <h1>Sabores</h1>

        <ul>
          {sabores.map(sabor => (
            <li key={sabor.id}>
              <input
                type="radio"
                id={sabor.id}
                name="sabor"
                value={sabor.id}
                onChange={e => setRadioValue(e.target.value)}
              />
              <label htmlFor={sabor.id}>{sabor.nome}</label>
            </li>
          ))}
        </ul>
        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/tipo")}>
            Voltar
          </button>
          <button type="button" onClick={escolherSabor}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
