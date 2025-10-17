import Project from "./Project.jsx";
import "../styling/project.css"
import ChefCScreenshot from "../assets/ChefCScreenshot.png"
import SiteFrontPage from "../assets/sitefrontpage.png"
import Placeholder from "../assets/meme.png"
//fixes
export default function MyProjects(){

    return(
        <main className="project-list">
            <Project
                title="Chef Claude App"
                description="A simple front-end React application that integrates with an AI API to generate smart responses."
                tech={["React"]}
                github="https://github.com/andoni4urain/AI-Chef-Project"
                demo="https://ai-chef-project.vercel.app/"
                image={ChefCScreenshot}
            />

            <Project
                title="My Portfolio Website"
                description="A website built using React to showcase all of my personal projects and information."
                tech={["React"]}
                github="https://github.com/andoni4urain/personal-website"
                demo="https://ai-chef-project.vercel.app/"
                image={SiteFrontPage}
            />

             <Project
                title="And Many More to Come :)"
                description="Stay tuned..."
                tech={["React"]}
                github="https://github.com/andoni4urain/"
                demo=""
                image={Placeholder}
            />

        </main>
    )
}