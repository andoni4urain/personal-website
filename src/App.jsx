import FancyButton from "./components/FancyButton"
import GithubLogo from "./assets/GithubLogo.png";
import LinkedinLogo from "./assets/LinkedinLogo.png";
import AboutMe from "./assets/AboutMe.png";
import ContactMe from "./assets/ContactMe.png";
import "./styling/buttons.css";

function App() {

  return (
    <main>
      <h1>Hello World</h1>
      <span className="button-row">
        <FancyButton image={GithubLogo} altText={"Github Logo"} variant="github"></FancyButton>
        <FancyButton image={LinkedinLogo} altText={"React Logo"} variant="linkedin"></FancyButton>
        <FancyButton image={AboutMe} altText={"About Me"} variant="aboutme"></FancyButton>
        <FancyButton image={ContactMe} altText={"Contact Me"} variant="contactme"></FancyButton>
      </span>
    </main>
    
  )
}

export default App
