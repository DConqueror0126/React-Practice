import { Box } from "@mui/material"
import {Link} from "react-router-dom"

export const Top = () => {

    return (
        <Box
            bgcolor="#583"
            width="95%"
            fontSize={50}
            sx={{color: "black" }}
            borderRadius="5"
            p={3}>
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center">
                    <Link to="/Home" style={{color:"blue" , fontSize:"50"}}>Home</Link>
                    <Link to="/Contacts" style={{color:"blue" , fontSize:"50"}}>Contacts</Link>
                    <Link to="/Address" style={{color:"blue" , fontSize:"50"}}>Address</Link>
                    <Link to="/About" style={{color:"blue" , fontSize: 40}}>About</Link>
            </Box>  
        </Box>
    )
}