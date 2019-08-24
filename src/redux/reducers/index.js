import { combineReducers } from "redux";

import authReducer from "./auth";
import pedidoReducer from "./pedido";

export default combineReducers({ authReducer, pedidoReducer });
