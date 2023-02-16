import styled from '@emotion/styled'
import { AppBar, Button } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header =styled(AppBar)`
 background: #111111
`
const Tabs=styled(NavLink)`
    font-size : 20px;
    margin-right:20px;
    color : inherit;
    text-decoration: None;
`





const NavBar = () => {
  return (
    
    <div>
        <Header position="static">
            <Toolbar>
                
                <Tabs to="/">Home</Tabs>
                <Tabs to="/allactivities">All Activities</Tabs>
                <Tabs to="/addactivity">Add Activity</Tabs>
                <Button to="#" sx={{marginLeft:"auto"}} variant="contained" >SignUp</Button>
                <Button to="#" sx={{marginLeft:"10px"}} variant="contained" >SignIn</Button>
            
            {/* <Tabs to="#" sx={{marginLeft:"800px"}} ><Button  variant="contained" >SignUp</Button></Tabs>
            <Tabs to="#" sx={{marginLeft:""}} ><Button  variant="contained" >SignIN</Button></Tabs> */}
            </Toolbar>
        </Header>
    </div>
    
  )
}

export default NavBar