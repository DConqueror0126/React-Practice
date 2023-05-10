import { Address } from "./components/address/Index"
import { Contacts } from "./components/contacts/Index"
import {Home} from "./components/home/Index"
import { Top } from "./components/layouts/top"
import { Box, Button, Grid, Link } from "@mui/material"
import { BrowserRouter as Router , Switch , Route} from "react-router-dom"
import { Info } from "./components/home/Info"
import { Add } from "./components/home/form/Add"
import { useState } from "react"
import { Update } from "./components/home/form/Update"
import { About } from "./components/about/Index"

const App = () => {
	const [devs, setDevs] = useState([
		{id: 1, name:"Ben Jerome C. Dolor" , age:"23" , number:"09772168006" , hobbies: "Sports and Games" , location:"Antipolo"},
		{id: 2, name:"Hannah Marisse R. Malvar", age:"27" , number:"09455706179" , hobbies: "Baking" , location:"Laguna"},
		{id: 3, name:"Lyn C. Dolor" , age:"58" , number:"09064507874" , hobbies:"Cooking and Candy Crush" , location:"Antipolo"},
		{id: 4, name:"Benito L. Dolor", age:"63" , number:"09288431323", hobbies:"Survey and Block Puzzles" , location:"Antipolo"}
	])

  	return (	
		<Box width="100" height="10px">
			<Router>
				<Top />
				<Switch>
					<Route exact path="/home" render={(v) =><Home {...v} devs={devs} setDevs={setDevs}/> } />
					<Route exact path="/dev/add" render={(v) =><Add {...v} devs={devs} setDevs={setDevs}/> } />
					<Route exact path="/contacts" render={(v) =><Contacts {...v}/> } />
					<Route exact path="/address" render={(v) =><Address {...v}/> } />
					<Route exact path="/about" render={(v) =><About {...v} /> } />
					<Route exact path="/info/:info" render={(v) =><Info {...v} /> } />
					<Route exact path="/dev/update:update" render={(v) =><Update {...v} devs={devs} setDevs={setDevs} /> } />
				</Switch>
			</Router>
			<Box p={2}>
				<Grid container spacing = {3}>
				</Grid>	
			</Box>
		</Box>
	)		
}
export default App;
