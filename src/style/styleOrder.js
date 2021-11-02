import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(theme => ({
  containerOrderList: {
    padding: '10px 0',
    color: '#fff',
    alignItems: 'center'
  },
  orderMenu: {
    fontSize: '26px',
    padding: '0 20px'
  },
  btnDelete: {
    '&:hover': {
      color: 'rgba(225, 0, 0, 0.45)'
    }
  }
}))