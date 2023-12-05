import React from 'react'
import { useState } from 'react';
import Login from './Login'
const Conditional = () => {
    const[st1,setst1]=useState({islog:true});
    /*const[st2,setst2]=useState({issign:false});
    if(st2.issign){
        return(
           <Login/>
        )
    }
    else{
        return(
        <h1>Please sign in</h1>
        )
    }*/
    //ternary
   return (
    <div>
     {st1.islog?<Login/>:<h1>failure</h1>}
    </div>
  )
}

export default Conditional