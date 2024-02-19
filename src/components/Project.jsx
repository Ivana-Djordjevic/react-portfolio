// * A single `Project` component that will be used multiple times in the Portfolio section

import { projects } from '../assets/data';

export default function Projects() {
    return (
        <div className='projects'> 
                {projects.map((project) => (
                    <section className="project-card border-style border-radius background-size relative-position" 
                             key={project.id} data-id={project.id}>
                        <div className='overlay'>
                             <h3 className="title">
                                {project.title}
                            </h3>
                            <div className="links">
                                <a href={project.githubLink} >Github Repo</a>
                                <a href={project.deployedLink} >Deployed Link</a>
                            </div>
                        </div>
                    </section>
                ))}
        </div>
    );
}