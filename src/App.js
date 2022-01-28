import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Button , Typography , Grid} from '@mui/material/'
import ContainerList from './ContainerList';
import Header from './Header';


const App=()=>{
  
  const [ List , setList] = useState([])
  const [ field , setField ] = useState( "" )
  const [ newid , setNewid  ] = useState( '' )
  const [ editFlag , setEditFlag  ] = useState( false )
  
  const changeHandler=(e)=>{
    setField( a=> e.target.value )
  }

  const addHandler=()=>{
    
    if( editFlag === false ){
      const newobj = { id:Date.now() , title:field }
      setList( a=> { return [...a , newobj ] } )
      setField("")
    }
    else{
      List.map( a=> { if(a.id== newid){ a.title = field  }  } )
      setList( [...List] )
      setField('')
      setEditFlag(false)
    }  
  }

  const deleteHandler=(id)=>{
    const NewList = List.filter( a=> id !== a.id)
    setList( NewList )
  }
  
  const editHandler=(id)=>{
    const obj = List.find( a=> a.id== id )
    setField( obj.title )
    setEditFlag( a=> true )
    setNewid( a=> obj.id )
 
  //   setNewObj ( obj )  
 //   console.log( newObj )
  }

  return(
    <>
    <Grid container justifyContent="center">
      
    <Grid item sm={8}>
        <Typography variant="h2" sx={{ m:3 ,mt:1, textAlign:'center' }} > TO-DO LIST </Typography>
      </Grid >

      <Grid item sm={8}>
        <Header addHandler={addHandler} changeHandler={changeHandler} field={field} editFlag={editFlag} />
      </Grid >
      
      <Grid item sm={8}>
        <ContainerList List = {List} deleteHandler={deleteHandler} editHandler = { editHandler } />
      </Grid >

    </Grid>
    </>
  )
}

export default App