import React from 'react';
import projects from '../data/Projects';
import ProjectItem from './ProjectItem';

function Projects(){
    return (
        <section className="text-gray-600 body-font font-primary">
            {projects.map(project => <ProjectItem key={project.id} project={project} />)}
        </section>
    )
}

export default Projects;