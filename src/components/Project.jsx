// * A single `Project` component that will be used multiple times in the Portfolio section

import { projects } from '../assets/data';

export default function Projects() {
    return (
        <div className='projects padding justify-content-center'> 
                {projects.map((project) => (
                    <section className='project-card display-flex border-style ' key={project.id} data-id={project.id}> 
                        <div>
                            <h3 className='title text-shadow'>{project.title}</h3>
                        </div>
                        <div className='image-container border-radius'>
                            <img src={project.image} alt={project.alt} ></img>
                        </div>
                        <div className="links display-flex text-shadow">
                            <a href={project.githubLink} target="_blank">Github Repo</a>
                            <a href={project.deployedLink} target="_blank">Deployed Link</a>
                        </div>
                    </section>
                ))}
        </div>
    );
}