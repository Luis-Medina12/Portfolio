
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  storeName: {
    display: 'flex', fontSize: '30px', fontWeight:'bold', justifyContent: 'center',
  },
  info: {
    fontSize: '20px', fontWeight:'bold',
  },
  results: {
    fontSize: '20px'
  },
  card: {
    color:'red',
  }
  
}));