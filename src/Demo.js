import React from 'react' ; 
import {Button , Grid,Box, Typography , Container ,Paper } from '@mui/material';


const Demo=(props)=>{
    return(
    <>
     
     <Paper sx={{width:400 , height:200 ,p:2}} elevation={10}>
         <Typography variant='h5' sx={{ textAlign:'center' }} > Material UI  </Typography>
         <Grid container justify="center" >
         <Button sx={{ml:'40%' , mr:'40%'}}> Button </Button>
         </Grid>
     </Paper>

    </>
    )
}

export default Demo 