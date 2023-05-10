import { Box, Button, Grid, Link} from "@mui/material"
import { List } from "./List"
import { useHistory } from "react-router-dom"
import { ModalDelete } from "./form/ModalDelete"
import { useState } from "react"

export const Home = ({devs, setDevs }) => {
    const history = useHistory()
    const [isShow, setIsShow] = useState(false)
    const [ids, setIds] = useState(0)
    const [Deleted, setDeleted] = useState(false)
    
    const infoHandler = (id) => {
        const filtered = devs.filter((a) => a.id === id)
        const value = window.btoa(JSON.stringify(filtered[0]))
        console.log(`/info/${value}`)
        history.push(`/info/${value}`)
    }
    
    const addHandler = () => {
        history.push(`dev/add`)
    }

    const updateHandler = (id) => {
        const filtered = devs.filter((v) => v.id === id)
        const value = window.btoa(JSON.stringify(filtered[0]))
        history.push(`/dev/update${value}`)
    }
    
    const showAlert = (id) => {
        setIsShow(true)
        setIds(id)
    }

    const cancelHandler =() => {
        setIsShow(false)
    }

    const deleteHandler = (id) => {
        const filtered = devs.filter((v) => v.id !== ids)
        setIsShow(false)
        setDevs(filtered)
        setDeleted(true)
        setTimeout(() => {
            setDeleted(false)
        }, 500);
    }

    return (
        <Box>
            <Link 
				fontSize={30}
				component={Button}
				to="/Add"
				mt={3}
				p={2}
                onClick={addHandler}>Add a new person to the list below! </Link>
            <Grid container spacing={3}>{
                devs.map((a, k)	=> (
                <List key={k} id={a.id} 
                name={a.name} age={a.age} number={a.number} 
                location={a.location} infoHandler={infoHandler} 
                updateHandler={updateHandler} showAlert={showAlert}/>
                ))
            }
            </Grid>
            <ModalDelete isShow={isShow} cancelHandler={cancelHandler} deleteHandler={deleteHandler} Deleted={Deleted}/>
        </Box>
    )
}