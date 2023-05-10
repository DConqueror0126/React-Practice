import { Alert, Box, Button, Grid, Snackbar, TextField} from "@mui/material"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const Update = ({match, devs, setDevs}) => {
        const history = useHistory()
    const [name, setName] = useState({value: '', error: false, msg:''})
    const [age, setAge] = useState({value: '', error: false, msg:''})
    const [number, setNumber] = useState({value: '', error: false, msg:''})
    const [hobbies, setHobbies] = useState({value: '', error: false, msg:''})
    const [location, setLocation] = useState({value: '', error: false, msg:''})
    const [Success, setSuccess] = useState(false)

    const inputHandler = (i) => {
        const {name, value} = i.target
        console.log(name, value)

        if (name === `name`) return setName({value: value, error: false, msg:``})
        if (name === `age`) return setAge({value: value, error: false, msg:``})
        if (name === `number`) return setNumber({value: value, error: false, msg:``})
        if (name === `hobbies`) return setHobbies({value: value, error: false, msg:``})
        if (name === `location`) return setLocation({value: value, error: false, msg:``})     
    }

    const submitHandler = () => {
        if (name.value === ``) {
            setName({...name, error: true, msg:`Field cannot be blank`})
            return
        }
        if (age.value === ``) {
            setAge({...name, error: true, msg:`Please use numerical value only`})
            return
        }
        if (number.value === ``) {
            setNumber({...name, error: true, msg:`Please use numerical value only`})
            return
        }
        if (hobbies.value === ``) {
            setHobbies({...name, error: true, msg:`Please input a valid hooby`})
            return
        }
        if (location.value === ``) {
            setLocation({...name, error: true, msg:`Please input a valid location`})
            return
        }
        
            const updated = devs.map((v) => 
            v.id === JSON.parse(window.atob(match.params.update)).id ?
            {...v, name:name.value, age:age.value, number:number.value,  hobbies: hobbies.value,  location:location.value}
        :
            {...v}
            )
            setDevs(updated)
            setSuccess(true)
            setTimeout(() => {
                history.push(`/Home`)
            }, 750)  
    }
    
    useEffect(() => {
        const decrypt = JSON.parse(window.atob(match.params.update))
        setName({...name, value:decrypt.name})
        setAge({...age, value:decrypt.age})
        setNumber({...number, value:decrypt.number})
        setLocation({...location, value:decrypt.location})
        setHobbies({...hobbies, value:decrypt.hobbies})
    }, [])

    return(
        <Box>
            <Snackbar
                open={Success}
                anchorOrigin={{vertical:"top", horizontal:"center"}}
            >
                <Alert severity="success">
                Information Updated Successfully
                </Alert>
            </Snackbar>
            <Box fontSize={30} fontWeight={200} mb={3} mt={5} ml={3}> UPDATE AN EMPLOYEE!</Box>
            <Box p={3}>
                <TextField
                    label="Name" 
                    name="name"
                    value={name.value}
                    error={name.error}
                    helperText={name.msg}
                    fullWidth
                    onChange={(e) => inputHandler(e)}/>    
            </Box>
            <Box p={3}>
                <TextField 
                    label="Age"
                    name="age"
                    type="number"
                    value={age.value}
                    error={age.error}
                    helperText={age.msg}
                    fullWidth
                    onChange={(e) => inputHandler(e)}/>    
            </Box>
            <Box p={3}>
                <TextField 
                    label="Number"
                    name="number"
                    type="number"
                    value={number.value}
                    error={number.error}
                    helperText={number.msg}
                    fullWidth
                    onChange={(e) => inputHandler(e)}/>    
            </Box>
            <Box p={3}>
                <TextField 
                    label="Hobbies"
                    name="hobbies" 
                    value={hobbies.value}
                    error={hobbies.error} 
                    helperText={hobbies.msg}
                    fullWidth
                    onChange={(e) => inputHandler(e)}/>    
            </Box>
            <Box p={3}>
                <TextField 
                    label="Location"
                    name="location" 
                    value={location.value} 
                    error={location.error}
                    helperText={location.msg}
                    fullWidth
                    onChange={(e) => inputHandler(e)}/>    
            </Box>
            <Box 
                component={Button}
                fontSize={30}
                color="blue"
                bgcolor="#583"
                fullWidth
                mt={3}
                onClick={submitHandler}> SUBMIT
            </Box>
        </Box>
    )
}