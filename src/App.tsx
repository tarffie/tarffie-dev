import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './App.css';

// * icon imports
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gitBanchIcon from 'assets/images/icons8-code-24.png';
// * importing pictLeft ures 
import Yoru from './assets/images/yoru.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
}));

const autolinker : string = "#";
const emacs : string = "https://github.com/tarffie/dot-emacs" 
const dotfiles : string = "https://github.com/tarffie/my-unholy-dotfiles?tab=readme-ov-file"

function App() {
  return (
    <Grid container spacing={2}>
    <Item xs={12} md={6} className="intro">
    <div>
    <img src={Yoru} alt='Picture of manga "Chainsaw Man" by Tatsuki Fujimoto, showing Yoru'
    style={{
      borderRadius: '25%',
      width: '250px',
          }}/>
    </div>
    </Item>
    <Box component="section" sx={{ p: 2, borderBottom: '1px solid dark-grey', width : "100%"}}>
    <Item className="intro">
    <ul className="mainLinks" style={{
      listStyle: "none",
      paddingLeft: "0px",
      textAlign: 'center',
    }}>
      <li><a href="https://github.com/tarffie" target="_blank"><GitHubIcon /></a></li>
      <li><a href="https://x.com/tarffie" target="_blank"><XIcon /></a></li>
      <li><a href="https://www.linkedin.com/in/tarffie/" target="_blank"><LinkedInIcon /></a></li>
    </ul>
    </Item>
    </Box>
    <Item className="introPar" style={{
      color: "#fff",
    }}>
    <Box component="section" sx={{ p: 2}}>
    <h2 className="fira-mono-medium" style={{ textAlign: "left", }}>Hi, I'm Yoru 👋</h2> 
    <p className="fira-mono-regular" style={{
      fontSize: '18px',
    }}> 
      My name is Yoru and I am a software programmer with a passion for Linux and Javascript.
      In my free time, I enjoy solving LeetCode exercises, reading and studying.
      I am excited to share my skills and experience with others in the field while also learning as much as  I can!
    </p>
    </Box>
    </Item>
    <Item className="projects" style={{
      color: "#fff",
    }}>
      <Box component="section" sx={{ p: 2}}>
        <h2 className="fira-mono-medium" style={{ textAlign: "left", }}>My Projects 🖥️</h2> 
        <p className="fira-mono-regular"> 
          My projects focus now on making low level applications using c++ and / or rust language or actually just setting up OSes: 
        </p>
      <Box component="div" sx={{ p: 2 }}>
      <div className="projectsList">
        <h2 className="fira-mono-medium"><span className="git-branch-icon"></span><a href={autolinker} target="_blank">AutoLinker</a></h2>
          <p> Application made in C++ inspired by Yay from Arch Linux, made to manipulate tarballs and link then into my /usr/bin directory.</p> 
        <h2 className="fira-mono-medium"><span className="git-branch-icon"></span><a href={emacs} target="_blank">Emacs Config</a></h2>
          <p> Little config made for vanilla emacs aimed to achieve a fully operational CIDE without using frameworks or anything like that. Does not Include Evil </p> 
        <h2 className="fira-mono-medium"><span className="git-branch-icon"></span><a href={dotfiles} target="_blank">Dotfiles</a></h2>
          <p> My home-baked dotfiles for my linux system and other side projects I did, like a gentoo setup </p> 
      </div> 
      </Box>
    </Box>
    </Item>
    <Item className="projects" style={{
      color: "#fff",
    }}>
    <Box component="section" sx={{ p: 2}}>
    <h2 className="fira-mono-medium">My work 🗂️ </h2>
      <Box component="div" sx={{ p: 2 }}>
        <ul className="projectsList">
          <li> <h2 className="fira-mono-medium"><a href="https://www.linkedin.com/company/promethean-interactive">Promethean Inc</a></h2>
              <p>Developed assets, debugging tools and provided backend structure for mobile games, mostly roguelikes</p> 
          </li>
          <li> <h2 className="fira-mono-medium"><a href="https://www.infopecas.com.br/"> Infopecas </a></h2>
              <p>Maintain and make repairs to computers, sales and even maintain their website</p> 
          </li>
        </ul> 
      </Box>
    </Box>
    </Item>
    </Grid>
  );
}

export default App;

