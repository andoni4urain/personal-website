import Project from "./Project.jsx";
import "../styling/project.css"
import ChefCScreenshot from "../assets/ChefCScreenshot.png"

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
                title="Chef Claude App"
                description="A simple front-end React application that integrates with an AI API to generate smart responses."
                tech={["React"]}
                github="https://github.com/andoni4urain/AI-Chef-Project"
                demo="https://ai-chef-project.vercel.app/"
                image={ChefCScreenshot}
            />

             <Project
                title="Chef Claude App"
                description="A simple front-end React application that integrates with an AI API to generate smart responses."
                tech={["React"]}
                github="https://github.com/andoni4urain/AI-Chef-Project"
                demo="https://ai-chef-project.vercel.app/"
                image={ChefCScreenshot}
            />

        </main>
    )
}