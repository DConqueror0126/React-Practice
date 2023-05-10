
import { Box } from "@mui/material"
import { useEffect , useState } from "react"

export const Info = ({match}) => {
    const [inf, setInf ] = useState({})

    useEffect(() => {
        const decrypted = JSON.parse(window.atob(match.params.info))
            setInf(decrypted)
    }, [])

    console.log(match.params)
    
    return (
        <Box
            bgcolor="#583"
            color="black"
            mt={2}
            p={2}
            borderRadius={1}
            bt={2}>
            <Box fontSize={25}>Name:{inf.name}</Box>
            <Box fontSize={16}>Age:{inf.age}</Box>
            <Box fontSize={16}>Number:{inf.number}</Box>
            <Box fontSize={16}>Hobbies: {inf.hobbies}</Box>
            <Box fontSize={16}>Location: {inf.location}</Box>
        </Box>
    )
}