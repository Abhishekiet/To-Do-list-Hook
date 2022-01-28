import React from 'react';
import { Grid, Paper, Typography  } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Card=(props)=>{
    return(
    <>
     
         <Paper elevation={2} sx={{ p:1 , m:2}}>
             <Grid container >
                 <Grid item sm={10} >
                     <Typography variant='h5' sx={{ ml:2 }} > {props.title} </Typography>
                  </Grid>
                  
                  <Grid item container justifyContent='center' sm={1}  >
                                             
                          <DeleteIcon variant='contained' onClick={props.deleteHandler} sx={{ color:'red' }} ></DeleteIcon>                         
                      
                  </Grid>

                  <Grid item sm={1} >
                      
                          <EditIcon onClick = {props.editHandler} sx={{ color:'green' }} ></EditIcon>
                     
                  </Grid>
             
             </Grid>
         </Paper>
     
    
    </>
    )
}
export default Card
