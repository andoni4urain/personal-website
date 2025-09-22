import { useState } from "react";
import { createPortal } from "react-dom"
import FancyButton from "./components/FancyButton";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import GithubLogo from "./assets/GithubLogo.png";
import LinkedinLogo from "./assets/BlackLinkedIn.png";
import "./styling/buttons.css";
import "./styling/app.css";
import "./styling/contactinfo.css";
import ContactInfo from "./components/ContactInfo";

function App() {

  const [projectsState, setProjects] = useState(false);
  const [contactsState, setContacts] = useState(false);
  

  function showprojects(){
        setProjects(() => !projectsState);
  }

  function showContact(){
      setContacts(() => !contactsState)
  }

  return (
    <div>
      <Header/>
      <main className="hero">
        <h1>Andoni Urain — Full-Stack Developer</h1>
        <p>I build performant, scalable web & mobile apps using various technologies.</p>
          <div className="btn-wrapper">
            <button className={projectsState ? "btn btn--primary btn--lg btn--primary--selected" : "btn btn--primary btn--lg"} onClick={showprojects}>{projectsState ? "Close" : "View"} Projects</button>
            <button className={contactsState ? "btn btn--ghost btn--lg btn--ghost--selected" : "btn btn--ghost btn--lg"} onClick={showContact}>Contact Me</button>
        </div>

      </main>

      <span className="button-row">
        <FancyButton image={GithubLogo} altText={"Github Logo"} variant="github"></FancyButton>
        <FancyButton image={LinkedinLogo} altText={"React Logo"} variant="linkedin"></FancyButton>
      </span>

      {projectsState ? <MyProjects/>:null}

      <div>
      {contactsState && createPortal(
        <ContactInfo onClose={() => setContacts(false)} />,
        document.body
      )}
      </div>

    </div>
  )
}

export default App
