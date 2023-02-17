 import './App.css';
import ImageDisp from './Components/ImageComp';
import Box from '@mui/material/Box';
import FrontHead from './Components/FrontHead';
import Grid from '@mui/material/Unstable_Grid2';
import CloseOpen from './Components/CloseOpen';
import appContext from './Context.js/app-context';
import { useState } from 'react';
import FloatingActionButtons from './Components/FloatingActionButtons';
import InputDisp from './Components/InputDisp';


function App() {


  let [isClosed , changeClosed]=  useState(false);
  let [activeColor , changeColor]=  useState('green');
  
  const appContextState = {
    isclosed : isClosed,
    changeClosed : changeClosed  ,
    activecolor : activeColor ,
    changeColor : changeColor , 
  }
  


  return (
    <appContext.Provider value={appContextState}>
    

   <Box sx={{ flexGrow: 1 }}>

   <Grid container  rowSpacing={4} columnSpacing={{ md: 8 }}>
        <Grid alignContent={'center'} md={14}>
        <FrontHead/>
        </Grid> 
    </Grid>
   


      <Grid container spacing={.5}>
        <Grid md={7}>
        <ImageDisp src='./shop_repair.jpg'/>
        </Grid>
        <Grid md={5}>
        <ImageDisp src='./shop_repair1.jpg'/>
        </Grid>
      </Grid>

 
        <CloseOpen></CloseOpen>
        <FloatingActionButtons></FloatingActionButtons>
      <InputDisp></InputDisp>

    </Box>
    
    </appContext.Provider>
  );
}

export default App;
