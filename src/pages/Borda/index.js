import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { setBordaPedido } from "../../redux/actions";

export default function Borda(props) {
  const [bordas, setBordas] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();

  const idTipo = useSelector(store => store.pedidoReducer.pizza.idTipo);

  useEffect(() => {
    api.get("/borda?id_tipo=" + idTipo).then(res => {
      setBordas(res.data);
    });
  }, [idTipo]);

  const escolherBorda = () => {
    if (radioValue === "") {
      return alert("Selecione ao menos uma opção");
    }
    const obj = bordas.filter(borda => borda.id === parseInt(radioValue));
    dispatch(setBordaPedido(obj[0].id, obj[0].nome));
    props.history.push("/confirmacao");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }

  return (
    <div className="fundo_inicio">
      <div>
        <h1>Bordas</h1>

        <ul>
          {bordas.map(borda => (
            <li key={borda.id}>
              <input
                type="radio"
                id={borda.id}
                name="borda"
                value={borda.id}
                onChange={e => setRadioValue(e.target.value)}
              />
              <label htmlFor={borda.id}>{borda.nome}</label>
            </li>
          ))}
        </ul>
        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/sabor")}>
            Voltar
          </button>
          <button type="button" onClick={escolherBorda}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
