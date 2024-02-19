// * A single `Project` component that will be used multiple times in the Portfolio section

import { projects } from '../assets/data';

export default function Projects() {
    return (
        <div className='projects'> 
                {projects.map((project) => (
                    <section className="project-card" key={project.id}>
                        <h3 className="title">
                            {project.title}
                        </h3>
                        <img scr={project.image} alt={project.alt}></img>
                        <div className="links">
                            <a href={project.githubLink} >Github Repo</a>
                            <a href={project.deployedLink} >Deployed Link</a>
                        </div>
                    </section>
                ))}
        </div>
    );
}