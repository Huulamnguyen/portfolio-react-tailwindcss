import React from 'react';
// import InventoryProject from '../img/inventory-pos-720-600.png';

function ProjectItem({project}){
    console.log(project.isDevelopment)
    return (
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={project.img} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#FF725E]">{project.title}
                        <br className="hidden lg:inline-block" /> {project.subtitle}
                    </h1>
                    <p className="mb-8 leading-relaxed">{project.description}</p>
                    {project.isDevelopment ? <p className="mb-8 italic leading-relaxed">Project is still in development</p> : null}
                    <div className="flex flex-wrap mb-8">
                        <p className="mx-3">Tags:</p>
                        {project.tags.map(tag => <span key={tag} className="text-xs m-2 py-1.5 px-4 text-white bg-[#FF725E] rounded-2xl">{tag}</span>)}
                    </div>
                    <div className="flex justify-center">
                        {project.src_code_link ? <a href={project.src_code_link} as="btn" className="inline-flex btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">Source Code</a> : null}
                        {project.deploymentLink ? <a href={project.deploymentLink } as="btn" className="ml-4 inline-flex btn btn-secondary">Live</a> : null}
                    </div>
                </div>
        </div>
    )
}

export default ProjectItem;