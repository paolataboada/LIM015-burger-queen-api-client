import React, { useState } from 'react'
import { Button, Grid, ButtonGroup } from '@mui/material';
import { useStyle } from '../style/styleOrder.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Pedidos() {
    const classe = useStyle();
    const [count, setCount] = useState(1);

    const pedidos = ['hamburguesa', 'gaseosa', 'agua', 'cheese burger']

    const selectOrder = (arrayMenu) => {
        const enterOrder = arrayMenu.filter((item) => {
            if (item.indexOf('agua') !== -1) {
                return item
            } else {
                return ''
            }
        })
        return enterOrder
    }
    console.log(17, selectOrder(pedidos))

    return (
        <Grid container direction="row" className={classe.containerOrderList} >
            <Grid item xs>
                <ButtonGroup variant="contained" color="primary" size="small" >
                    <Button
                        aria-label="quitar"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                        sx={{padding:0}}
                    >
                        -
                    </Button>
                    <Button sx={{padding:0}}>{count}</Button>
                    <Button
                        aria-label="añadir"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                        sx={{padding:0}}
                    >
                        +
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={7}>
                <span className={classe.orderMenu}>{selectOrder(pedidos)}</span>
            </Grid>
            <Grid item xs>
                <DeleteForeverIcon fontSize="large" className={classe.btnDelete} />
            </Grid>
        </Grid>
    )
}

