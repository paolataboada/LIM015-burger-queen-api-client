import { makeStyles } from "@mui/styles";
import logo1 from '../img/logo1.png';
import fondoHome from '../img/contenedor.png';

export const useStyles = makeStyles(theme => ({
  fondoHome: {
    backgroundImage: `url(${fondoHome})`,
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundSize: 'cover',
    fontFamily: 'Averia Libre'
  },
  logo: {
    backgroundImage: `url(${logo1})`,
    width: '6%',
    height: '6%',
  },
  ToolbarColor: {
    backgroundColor: '#000',
    borderBottom: '3px  solid #fb970e'
  },
  listas: {
    padding: '0 30px',
    color: '#fff',
    listStyle: 'none'
  }
}));