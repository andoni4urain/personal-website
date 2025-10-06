import { useState } from "react";
import { createPortal } from "react-dom"
import FancyButton from "./components/FancyButton";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import ContactInfo from "./components/ContactInfo";
import AIChatBox from "./components/AIChatBox";
import GithubLogo from "./assets/GithubLogo.png";
import LinkedinLogo from "./assets/BlackLinkedIn.png";
import "./styling/buttons.css";
import "./styling/app.css";
import "./styling/contactinfo.css";


function App() {

  {/*State for main 2 buttons*/}
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
        <FancyButton link="https://github.com/andoni4urain" image={GithubLogo} altText={"Github Logo"} variant="github"></FancyButton>
        <FancyButton link="https://www.linkedin.com/in/andoni-urain-0643b8333/" image={LinkedinLogo} altText={"linkedin Logo"} variant="linkedin"></FancyButton>
      </span>

      <AIChatBox></AIChatBox>

      {/*Displays projects when true*/}
      {projectsState ? <MyProjects/>:null}

      {/*Displays contact me modal when true*/}
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
