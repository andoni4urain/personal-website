import { useState, useRef } from "react";
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
  const projectsRef = useRef(null); //createRef
  

  function showprojects() {
    const newVal = !projectsState;
    setProjects(newVal);

    // wait a tick for the section to render before scrolling
    if (!projectsState && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200); // delay to let animation start
    }
  }

  function showContact(){
      setContacts(() => !contactsState)
  }

  return (
    <div>
      <Header/>
      <main className="hero">
        <h1>Andoni Urain — Full-Stack Developer</h1>
        <p>Full-stack developer crafting fast, scalable experiences for web and mobile.
          Check out my latest projects or get in touch to discuss new ideas.</p>
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

      {/* Displays projects when true */}
      <div ref={projectsRef} className={`projects-wrap ${projectsState ? "is-open" : ""}`}>
        {projectsState && (
          <div className="projects-enter">
            <MyProjects />
          </div>
        )}
      </div>

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
