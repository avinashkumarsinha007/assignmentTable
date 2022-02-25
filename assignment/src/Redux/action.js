import axios from "axios";
import { GET_TABLE_FAILURE, GET_TABLE_REQUEST, GET_TABLE_SUCCESS, SET_FILTER } from "./actionType";

const getTableDataRequest = () => {
    return{
        type:GET_TABLE_REQUEST
    }
}
 const getTableDataSuccess=(payload)=>{
    return{
        type:GET_TABLE_SUCCESS,
        payload
    }
}
 const getTableDataFailure=(payload)=>{
    return{
        type:GET_TABLE_FAILURE,
        payload
    }
}

export const getTableData=(page=null)=>(dispatch)=>{
    dispatch(getTableDataRequest());
    axios.get(`https://reqres.in/api/users?page=${page}`)
        .then(res => {
            dispatch(getTableDataSuccess(res.data.data))
        })           
    .catch(err=>dispatch(getTableDataFailure(err)));
}

export const setFilter=(payload)=>{
    return{
        type:SET_FILTER,
        payload
    }
}