import React from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";
import { atualizaPontuacao } from "../../redux/actions";

export default function Confirmacao(props) {
  const pedido = useSelector(state => state.pedidoReducer);
  const auth = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  const finalizarPedido = async () => {
    const { pizza } = pedido;
    await api.post("/pedido", {
      user_id: pedido.usuario,
      tamanho_id: pizza.idTamanho,
      massa_id: pizza.idMassa,
      tipo_id: pizza.idTipo,
      sabor_id: pizza.idSabor,
      borda_id: pizza.idBorda,
      sugestao: pizza.sugerido
    });

    if (pizza.sugerido) {
      const user = await api.get("/usuario/" + auth.usuario.id);
      user.data.pontuacao = user.data.pontuacao + 5;
      const { data } = user;
      await api.put("/usuario/" + auth.usuario.id, {
        id: data.id,
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        pontuacao: data.pontuacao
      });

      dispatch(atualizaPontuacao(data.pontuacao));
    }
    props.history.push("/final");
  };

  if (!localStorage.getItem("user")) {
    props.history.push("/");
  }

  return (
    <div className="fundo_inicio">
      <div>
        <h1>Confirmação</h1>

        <ul>
          <li>
            <span>Tamanho: {pedido.pizza.tamanho}</span>
          </li>
          <li>
            <span>Massa: {pedido.pizza.massa}</span>
          </li>
          <li>
            <span>Tipo: {pedido.pizza.tipo}</span>
          </li>
          <li>
            <span>Sabor: {pedido.pizza.sabor}</span>
          </li>
          <li>
            <span>Borda: {pedido.pizza.borda}</span>
          </li>
        </ul>

        <div className="comandos">
          <button type="button" onClick={() => props.history.push("/borda")}>
            Voltar
          </button>
          <button type="button" onClick={finalizarPedido}>
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
