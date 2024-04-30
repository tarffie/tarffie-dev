import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './App.css';

// * icon imports
import CodeIcon from '@mui/icons-material/Code';


// * importing pictures 
import Denji from './assets/images/denji.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function App() {
  return (
	<Grid container spacing={2}>
		<Item xs={12} md={6}>
			<img src={Denji} alt='Picture of manga "Chainsaw Man" by Tatsuki Fujimoto, showing Denji drinking from a mug'
			style={{
				width: '250px',
				height: 'auto',
				borderRadius: '20',
				paddingLeft: '13px',
			}}/>
			</Item>
			<Item>
				<ul>
					<li><CodeIcon/><a href="https://github.com/tarffie"> Github Profile</a></li>
					<li></li>
					<li></li>
				</ul>
			</Item>
		</Grid>
  );
}

export default App;

