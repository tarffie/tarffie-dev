import { projects } from "./assets/content/projects.json";

import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import { SocialLinks } from "./components/SocialIcons";

function App() {
  return (
    <>
      <Introduction />
      <div className="projects-list">
        <Projects projects={projects} />
      </div>
    </>
  )
}

export default App
