import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router-dom"

export const Add = ({devs, setDevs}) => {
    const history = useHistory()
    const [name, setName] = useState({value: '', error: false, msg:''})
    const [age, setAge] = useState({value: '', error: false, msg:''})
    const [number, setNumber] = useState({value: '', error: false, msg:''})
    const [hobbies, setHobbies] = useState({value: '', error: false, msg:''})
    const [location, setLocation] = useState({value: '', error: false, msg:''})

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
            setAge({...name, error: true, msg:`Please use numerical value only/Field cannot be blank`})
            return
        }
        if (number.value === ``) {
            setNumber({...name, error: true, msg:`Please use numerical value only/Field cannot be blank`})
            return
        }
        if (hobbies.value === ``) {
            setHobbies({...name, error: true, msg:`Please input a valid hobby/Field cannot be blank`})
            return
        }
        if (location.value === ``) {
            setLocation({...name, error: true, msg:`Please input a valid location/Field cannot be blank`})
            return
        }
            
        const news = {id: devs.length + 1, name: name.value  , age: age.value , number: number.value , hobbies: hobbies.value , location: location.value}
            setDevs([...devs, news])
            history.push(`/Home`)
        }

    return(
        <Box>
            <Box fontSize={30} fontWeight={200} mb={3} mt={5} ml={3}> ADD A PERSON!</Box>
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
                color="white"
                bgcolor="#583"
                fullWidth
                mt={3}
                onClick={submitHandler}> SUBMIT
            </Box>
        </Box>
    )
}