import { Alert, Box, Button, Dialog, Snackbar } from "@mui/material"
import { useState } from "react"

export const ModalDelete = ({deleteHandler, cancelHandler, isShow, Deleted}) => {
    
return (
    <Box>
        <Snackbar
            open={isShow}
            anchorOrigin={{vertical:'top', horizontal:'center'}}>
            <Alert severity="info">
                Deleted information cannot be restored!
            </Alert>
        </Snackbar>
        <Snackbar
            open={Deleted}
            anchorOrigin={{vertical:'top', horizontal:'center'}}>
            <Alert severity="success">
                Information has been deleted successfully!
            </Alert>
        </Snackbar>
        <Dialog open={isShow} >
        <Box height="100%" width="100%">
            <Box fontSize={20} justifyContent="center" p={3}>
                <Box>Are you sure you want to delete the information of this Employee?</Box>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    gap={2} 
                    pt={2}>
                    <Button 
                        onClick={cancelHandler} 
                        variant="contained" 
                        color="warning">Cancel</Button>
                    <Button 
                        onClick={deleteHandler} 
                        variant="contained" 
                        color="error">Yes</Button>
                </Box>
            </Box>
        </Box>
    </Dialog>
    </Box>
)
}