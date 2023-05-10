import { Box } from "@mui/material"
import Profile from '../../assets/image/download.jpg'

export const About = () => {
    return (
        <Box>
            <Box fontSize={60} fontWeight={50} pt={3} >This is the information of the Developer</Box>
            <Box mt={3}>
                <Box display="flex" alignItems="top" >
                
                    <Box
                    borderRadius={2}
                    mr={3} 
                    component="img" 
                    src={Profile} 
                    alt=""
                    width={200} />
                    <Box ml={2}>
                        <Box fontSize={30}>Xiao</Box>
                        <Box>Conqueror of Demons</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}