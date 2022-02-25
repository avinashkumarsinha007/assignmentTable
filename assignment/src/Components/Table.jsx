import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTableData, setFilter } from "../Redux/action";
import { Row } from "./Row";
import Button from '@mui/material/Button';

export const Table = () => {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.app.list);
    const [page, setPage] = useState(1);

    React.useEffect(() => {
        dispatch(getTableData(page));
    }, [page]);

    const handleDelete = (id) => {
        let newList = tableData.filter((item) => id !== item.id);
        newList = newList.map((el) => {
            return el;
          });
          dispatch(setFilter(newList));
    }
    const handleSave = (payload) => {
      
    }
    const handlePage = (no) => {
        setPage(prev=>prev+no)
    }
    return (
        <>
            {
                tableData.map((el) => {
                    return <Row handleSave={handleSave} handleDelete={handleDelete} key={el.id} item={el}/>
                })
            }
            <div style={{marginLeft:"80vw",marginBottom:"2vh"}}>
                <Button onClick={()=>handlePage(-1)} disabled={page===1} variant="outlined">Prev</Button>
                <Button  variant="outlined">{page}</Button>
                <Button onClick={()=>handlePage(1)} variant="outlined">Next</Button>
            </div>
        </>
    )
}