import React from 'react';
import {Button , Grid , Paper , TextField } from '@mui/material/'


const Header=(props)=>{

    return(
        <>
        <Grid item sm={12}>
            <Paper elevation={4} sx={{ height:100 , p:3 }}  >
                <TextField variant='outlined' sx={{width:'100%' ,boxShadow:'3' , mb:2}} onChange={props.changeHandler} 
                value={props.field} placeholder='Add Here To-Do Item' />
                {
                    props.editFlag ?
                    <Grid container justifyContent='center'>
                        <Button variant='contained' sx={{ width:'90%' , backgroundColor:'green'}}
                         onClick={props.addHandler}> Edit </Button>
                    </Grid>
                                     
                                     :
                    
                    <Grid container justifyContent='center'>
                        <Button variant='contained' sx={{ width:'90%' , backgroundColor:'navy'}}
                         onClick={props.addHandler}> Add </Button>
                    </Grid>
                }
            </Paper>
        </Grid>
        </>
    )
}
export default Header 