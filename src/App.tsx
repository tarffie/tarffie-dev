import { projects } from "./assets/content/projects.json";

import './App.css'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

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
