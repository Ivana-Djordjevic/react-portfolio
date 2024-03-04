import React from 'react';

import Project from '../components/Project';
import { projects } from '../assets/data';

export default function PortfolioPage() {
    return (
        <div className="projects padding justify-content-center"> 
            {projects.map((project) => (
                < Project project={project} key={project.id}/>
            ))}
        </div>
    );
}