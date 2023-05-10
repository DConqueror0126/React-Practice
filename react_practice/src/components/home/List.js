import { Box, Button, Grid } from "@mui/material"
export const List = ({id, age, name, number, hobbies , infoHandler , showAlert, updateHandler }) => {

    return (
        <Grid item xl ={3} lg ={4} md={6} xs={12}>
            <Box 
                bgcolor="#583"
                color="black"
                p={2}
                borderRadius={3}
                mt={3}>
            <Box fontSize={25}>Name:{name}</Box>
            <Box fontSize={20}>Age:{age}</Box>
            <Box fontSize={30}>
                <Box
                    component={Button} 
                    onClick={() => infoHandler(id, name)}
                    fontSize={20}
                    color="maroon">Additional Information</Box>
                <Box
                    component={Button}
                    color="blue"
                    fontSize={20}
                    onClick={() => updateHandler(id)}>Update</Box>
                <Box
                    component={Button} 
                    onClick={() => showAlert(id)}
                    fontSize={20}
                    color="Red">Delete</Box>
                </Box>    
            </Box>
        </Grid>
    )   
}