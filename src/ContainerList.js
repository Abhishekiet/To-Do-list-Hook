import React from 'react';
import Card from './Card';
import { Grid , Box , Button} from '@mui/material'


const ContainerList=(props)=>{
    const show = props.List.map( a => <Card title={a.title} key ={ a.id }  deleteHandler={()=>props.deleteHandler(a.id) } 
                                       editHandler = {()=>props.editHandler( a.id )  } /> )
    return(
        <>
        <Grid item sm={12} sx={{ mt:3, p:3 , boxShadow : 4 }}>
            <Box sx={{ minHeight:60 }} >
               
                {show}

                <Grid container justifyContent='center'>
                        <Button variant='contained' sx={{ width:'90%' , backgroundColor:'red'}}
                         onClick={props.addHandler}> Clear List </Button>
                </Grid>

            </Box>
        </Grid>
        </>
    )
}
export default ContainerList