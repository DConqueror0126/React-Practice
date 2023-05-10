import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom/cjs/react-router-dom"

export const Contacts = () => {
    return (
        <Box>
            <Box
                p={3}
                mt={5}
                ml={10}
                mb={3}
                bgcolor="#583"
                textAlign={"center"} 
                fontSize={45}
                fontWeight={1000}>
                This is the Contacts Page</Box>
            <Box
                p={3}
                bgcolor="#583"
                ml={10}
                textAlign={"center"} 
                fontSize={40}>
            <Link to="/address"> Click me to see the next page</Link>
            </Box>
        </Box>
    )
}