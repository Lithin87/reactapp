import { Button } from "@mui/material";
import { useContext } from "react";
import appContext from "../Context.js/app-context";
import Grid from '@mui/material/Unstable_Grid2';

function CloseOpen(props) {

const ctx = useContext(appContext);

    return (

        <div style={{ "text-align" : "center" }}>

       <Grid container spacing={.1}>
        <Grid md={8}>
        <Button size="large" color="success" variant="contained" onClick={ () => { ctx.changeClosed(false);  ctx.changeColor('green');}}>OPEN1</Button> 
        </Grid>
        <Grid md={1}>
        <Button size="large" color="error" variant="contained" onClick={ () => { ctx.changeClosed(true);  ctx.changeColor('red') ;}}>CLOSE</Button>
        </Grid>
      </Grid>


        </div>
    )
}
export default CloseOpen;

