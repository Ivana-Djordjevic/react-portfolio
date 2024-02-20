// * A single `Project` component that will be used multiple times in the Portfolio section

import { projects } from '../assets/data';

export default function Projects() {
    return (
        <div className='projects justify-content-center'> 
                {projects.map((project) => (
                    <section className="project-card border-style border-radius background-size relative-position justify-content-center" 
                             key={project.id} data-id={project.id}>
                        <div className='overlay justify-content-center'>
                             <h3 className="title">
                                {project.title}
                            </h3>
                            <div className="links">
                                <a href={project.githubLink} target="_blank">Github Repo</a>
                                <a href={project.deployedLink} target="_blank">Deployed Link</a>
                            </div>
                        </div>
                    </section>
                ))}
        </div>
    );
}