import { GET_TABLE_FAILURE, GET_TABLE_REQUEST, GET_TABLE_SUCCESS, SET_FILTER } from "./actionType";

const inState = {
    isLoading: false,
    isError: false,
    list: [],
  };
  
  export const reducer = (state = inState, { type, payload }) => {
    switch (type) {
      case GET_TABLE_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_TABLE_SUCCESS:
        {
          return {
            ...state,
            isLoading: false,
            list: payload
          };
        }
       
      case GET_TABLE_FAILURE:
        return {
          ...state,
          isError: true,
        };
        case SET_FILTER:
          return {
            ...state,
            list:payload,
        };
      default:
        return state;
    }
  };