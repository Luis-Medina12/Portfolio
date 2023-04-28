import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '10px', background: 'rgb(204, 0, 0)', display: 'flex', alignItems: 'center', minHeight: '85vh', fontSize: '15px',
    margin: '10px', borderRadius: '10px', flexFlow: 'column', color:'white', marginTop:'20px',
  },
  explain: {
    padding: '10px', display: 'flex',  justifyContent: 'center', fontSize: '20px', margin: '10px', 
    borderRadius: '10px', flexFlow: 'column', marginBottom:'50px',
  },
  welcome:{
    padding: '10px', display: 'flex',  justifyContent: 'center', alignItems: 'center',margin: '20px', 
    borderRadius: '10px', flexFlow: 'column',
  },
  imageContainer:{
    padding: '10px', display: 'flex',  justifyContent: 'center', fontSize: '20px', margin: '10px', 
    borderRadius: '10px', flexWrap: 'wrap',
  },
  instructions:{
    padding: '10px', display: 'flex',  justifyContent: 'center', fontSize: '20px', margin: '10px', 
    borderRadius: '10px', flexFlow: 'column', alignItems:'center',
  },
  images:{
    margin: '10px', border: 'black 2px solid', borderRadius: '10px',
  },
  
}));