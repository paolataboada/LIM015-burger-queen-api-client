import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Stack, Button, Grid, ButtonGroup } from '@mui/material';
import Pedidos from '../views/Order.js'
import { getProducts } from '../services/Product.js';
// Iconos de MUI
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import { useStyles } from '../style/styleHome.js';
import { useStyle } from '../style/styleOrder.js';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/styleLogin.js';
import logo1 from '../img/logo1.png';

export default function Home() {

  const [desayunos, setDesayunos] = useState([]);
  const [menu, setMenu] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const ListarDesayuno = () => {
    // console.log('lista de DESAYUNO');
    getProducts('desayuno').then(producto => {
      console.log(producto._id);
      setBebidas('');
      setMenu('');
      setDesayunos(producto);
    });
  }

  const ListarMenu = () => {
    getProducts('menú').then(producto => {
      setDesayunos('');
      setBebidas('');
      setMenu(producto);

    });
  }

  const ListarBebidas = () => {
    getProducts('bebidas').then(producto => {
      setDesayunos('');
      setMenu('');
      setBebidas(producto);
    });
  }

  const classes = useStyles();
  const classe = useStyle();
  return (
    <Box className={classes.fondoHome} >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.Toolbar}>
          <Toolbar className={classes.ToolbarColor}>

            <Typography variant="h6" component="div" sx={{ flexGrow: 0.03 }}>
              BURGER
            </Typography>
            <img className={classes.logo} src={logo1} alt='Header Title' />
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              QUEEN
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 0.1 }}>
              {localStorage.getItem('user')}
            </Typography>
            <ThemeProvider theme={theme}>
              <ButtonGroup variant="contained" color="primary">
                <Button sx={{ width: '6vh', height: '4vh' }}><ArrowBackIosTwoToneIcon fontSize='small' /></Button>
                <Button sx={{ width: '6vh', height: '4vh' }}><ExitToAppIcon fontSize='small' /></Button>
              </ButtonGroup>
            </ThemeProvider>
          </Toolbar>
        </AppBar>

        <Grid container direction="row" spacing={3} rowSpacing={1} >
          <Grid item xs={6} component='main' sx={{ backgroundColor: 'rgba(1 1 1 / 34%)', paddingLeft: '50px' }}>
            <Stack spacing={2} direction="row" margin="3vh">
              <Button variant="contained" onClick={ListarDesayuno} size="large" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }} >
                DESAYUNO
              </Button>
              <Button variant="contained" onClick={ListarMenu} size="large" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }}>
                MENÚ
              </Button>
              <Button variant="contained" onClick={ListarBebidas} size="large" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }}>
                BEBIDAS
              </Button>
            </Stack>
            {/* <ThemeProvider theme={theme}> */}
            <ul className={classes.listas}>
              {desayunos && (
                desayunos.map((desayuno) => (
                  <li key={desayuno._id}>
                    <Grid container direction='row' alignItems="center" >
                      <Button  xs={6}>{desayuno.name}</Button>
                      <Button  xs={6}>S/.{desayuno.price}</Button>
                    </Grid>
                  </li>
                ))
              )}
            </ul>
            <ul className={classes.listas}>
              {menu && (
                menu.map((menus) => (
                  <li key={menus._id}>
                    <Grid container direction='row' alignItems="center">
                      <Button  xs={6}>{menus.name}</Button>
                      <Button  xs={6}>S/.{menus.price}</Button>
                    </Grid>
                  </li>
                ))
              )}
            </ul>
            <ul className={classes.listas}>
              {bebidas && (
                bebidas.map((bebida) => (
                  <li key={bebida._id}>
                    <Grid container direction='row' alignItems="center" >
                      {/* <ThemeProvider theme={theme}> */}
                        <Button  xs={6}>{bebida.name}</Button>
                        <Button  xs={6}>S/.{bebida.price}</Button>
                      {/* </ThemeProvider> */}
                    </Grid>
                  </li>
                ))
              )}
            </ul>
            {/* </ThemeProvider> */}
          </Grid>
          <Grid item xs={6} component='main' color='warning'>
            <h2 style={{ color: '#fff', padding: '24px 0' }}>Lista de Pedidos</h2>
            <Pedidos className={classe.containerOrderList} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}


