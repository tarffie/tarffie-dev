import { Button } from './Button'
import { MdDataObject } from "react-icons/md";
import { homeUrl } from "../assets/content.json";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <a className="HomeAnchor" href={homeUrl} target="_self">
          <div className="header-content">
            <span className="header-icon" role="img" aria-label="Portfolio icon">
              <MdDataObject />
            </span>
            <h1 className="header-title">Emilia Tarffie</h1>
          </div>
        </a>
        <nav>
          <div className="nav-content">
            <Button content="About" target="#about" />
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
