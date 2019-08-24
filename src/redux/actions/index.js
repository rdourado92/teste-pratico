export const initial_state = () => ({
  type: "INITIAL_STATE"
});

export const signinRequest = (email, passwd) => ({
  type: "SIGNIN_REQUEST",
  email,
  passwd
});

export const signinSuccess = user => ({
  type: "SIGNIN_SUCCESS",
  user
});

export const signinFailure = erroMsg => ({
  type: "SIGNIN_FAILURE",
  erroMsg
});

export const atualizaPontuacao = pontuacao => ({
  type: "ATUALIZA_PONTOS",
  pontuacao
});

export const setUsuario = id => ({
  type: "SET_USUARIO",
  usuario: id
});

export const setPedidoSugerido = pedido => ({
  type: "PEDIDO_SUGERIDO",
  idTamanho: pedido.idTamanho,
  tamanho: pedido.tamanho,
  idMassa: pedido.idMassa,
  massa: pedido.massa,
  idTipo: pedido.idTipo,
  tipo: pedido.tipo,
  idSabor: pedido.idSabor,
  sabor: pedido.sabor,
  idBorda: pedido.idBorda,
  borda: pedido.borda
});

export const setTamanhoPedido = (idTamanho, tamanho) => ({
  type: "SET_TAMANHO",
  idTamanho,
  tamanho
});

export const setMassaPedido = (idMassa, massa) => ({
  type: "SET_MASSA",
  idMassa,
  massa
});

export const setTipoPedido = (idTipo, tipo) => ({
  type: "SET_TIPO",
  idTipo,
  tipo
});

export const setSaborPedido = (idSabor, sabor) => ({
  type: "SET_SABOR",
  idSabor,
  sabor
});

export const setBordaPedido = (idBorda, borda) => ({
  type: "SET_BORDA",
  idBorda,
  borda
});
