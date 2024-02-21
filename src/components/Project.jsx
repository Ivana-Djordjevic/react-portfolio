import React from 'react';

export default function Projects({project}) {
    return (
        <section className="project-card display-flex border-style " key={project.id} data-id={project.id}> 
            <div>
                <h3 className="title text-shadow">{project.title}</h3>
            </div>
            <div className="image-container border-radius">
                <img src={project.image} alt={project.alt} ></img>
            </div>
            <div className="links display-flex text-shadow">
                <a href={project.githubLink} target="_blank" rel="noreferrer">Github Repo</a>
                <a href={project.deployedLink} target="_blank" rel="noreferrer">{project.deployedLink ? 'Deployed Link' : 'Back End Only'}</a>
            </div>
        </section>

    );
}