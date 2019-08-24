const INITIAL_STATE = {
  usuario: {
    id: 0,
    nome: "",
    email: "",
    pontuacao: 0
  },
  pizza: {
    tamanho: "",
    massa: "",
    tipo: "",
    sabor: "",
    borda: ""
  },
  carregandoLogin: false,
  logado: false,
  erro: false,
  erroMsg: ""
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INITIAL_STATE":
      return { ...state, INITIAL_STATE };
    case "SIGNIN_REQUEST":
      return { ...state, carregandoLogin: true };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        usuario: action.user,
        carregandoLogin: false,
        logado: true,
        erro: false,
        erroMsg: ""
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        usuario: {},
        carregandoLogin: false,
        logado: false,
        erro: true,
        erroMsg: action.erroMsg
      };
    case "ATUALIZA_PONTOS":
      return {
        ...state,
        usuario: {
          ...state.usuario,
          pontuacao: action.pontuacao
        }
      };
    default:
      return state;
  }
};

export default authReducer;
