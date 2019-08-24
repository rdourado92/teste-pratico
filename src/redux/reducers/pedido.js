const INITIAL_STATE = {
  usuario: 0,
  pizza: {
    sugerido: false,
    idTamanho: 0,
    tamanho: "",
    idMassa: 0,
    massa: "",
    idTipo: 0,
    tipo: "",
    idSabor: 0,
    sabor: "",
    idBorda: 0,
    borda: ""
  }
};

const pedidoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USUARIO":
      return {
        usuario: action.usuario,
        pizza: {
          ...state.pizza
        }
      };
    case "PEDIDO_SUGERIDO":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          sugerido: true,
          idTamanho: action.idTamanho,
          tamanho: action.tamanho,
          idMassa: action.idMassa,
          massa: action.massa,
          idTipo: action.idTipo,
          tipo: action.tipo,
          idSabor: action.idSabor,
          sabor: action.sabor,
          idBorda: action.idBorda,
          borda: action.borda
        }
      };
    case "SET_TAMANHO":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          idTamanho: action.idTamanho,
          tamanho: action.tamanho
        }
      };
    case "SET_MASSA":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          idMassa: action.idMassa,
          massa: action.massa
        }
      };
    case "SET_TIPO":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          idTipo: action.idTipo,
          tipo: action.tipo
        }
      };
    case "SET_SABOR":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          idSabor: action.idSabor,
          sabor: action.sabor
        }
      };
    case "SET_BORDA":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          idBorda: action.idBorda,
          borda: action.borda
        }
      };
    default:
      return state;
  }
};

export default pedidoReducer;
