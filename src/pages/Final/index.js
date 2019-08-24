import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { initial_state } from "../../redux/actions";

export default function Final(props) {
  const pedido = useSelector(state => state.pedidoReducer);
  const auth = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const sair = () => {
    dispatch(initial_state());
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <div className="fundo_inicio">
      <div>
        <h1>Obrigado por comprar conosco, Volte Sempre !</h1>

        <h3>
          {pedido.pizza.sugerido && <>Você acumulou mais 5 pontos.</>}
          Atualmente você esta com {auth.usuario.pontuacao} pontos
        </h3>

        <div className="comandos">
          <button type="button" onClick={sair}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
