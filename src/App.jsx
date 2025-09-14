import FancyButton from "./components/FancyButton"
import Header from "./components/Header";
import GithubLogo from "./assets/GithubLogo.png";
import LinkedinLogo from "./assets/BlackLinkedIn.png";
import "./styling/buttons.css";
import "./styling/app.css";

function App() {

  return (
    <div>
      <Header/>
      <main className="hero">
        <h1>Andoni Urain — Full-Stack Developer</h1>
        <p>I build performant, scalable web & mobile apps using various technologies.</p>
          <div className="btn-wrapper">
            <button className="btn btn--primary btn--lg">View Projects</button>
            <button className="btn btn--ghost btn--lg">Contact Me</button>
        </div>

      </main>
      

      <span className="button-row">
        <FancyButton image={GithubLogo} altText={"Github Logo"} variant="github"></FancyButton>
        <FancyButton image={LinkedinLogo} altText={"React Logo"} variant="linkedin"></FancyButton>
      </span>
    </div>
    
  )
}

export default App
