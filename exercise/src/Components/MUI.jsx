import { AccountCircle, CheckBox, Delete } from "@mui/icons-material";
import { Alert, Button, ButtonGroup, Checkbox } from "@mui/material";
import React, { useState } from "react";

const MUI = () => {
const [color, setColor]=useState("success")
const [disableBtn,setDisableBtn]=useState(false)
const [checkBtn,setCheckBtn]=useState({
  fruit:"",
  vag:"",
  chicken:"",

})
    
    const fun=()=>{
        setColor("secondary")  
        setDisableBtn(true)
    }

  const getValue=(e)=>{
    setCheckBtn({...checkBtn,[e.target.name]:[e.target.value]})
    console.log(checkBtn);
  }
  return (
     
    <div>
      <Button 
      color={color}
      variant="contained"
      onClick={()=>{fun()}}
      disabled={disableBtn}
      startIcon={< Delete/> }
      endIcon={ <AccountCircle /> }
      >Click Button</Button>
      <br/><br/>

    <ButtonGroup 
    orientation="vertical" // for aligen your buttons
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <br/>
    <br/>


    <Checkbox color="primary" name="fruit" value={checkBtn.fruit} onChange={(e)=>{getValue(e)}} />
    <Checkbox color="primary" name="vag" value={checkBtn.vag} onChange={(e)=>{getValue(e)}} />
    <Checkbox color="primary" name="chicken" value={checkBtn.chicken} onChange={(e)=>{getValue(e)}} />




    </div>
  );
};

export default MUI;
