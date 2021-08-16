import React from 'react';

function Projects(props) {
    return (
        <div className='projects'>
            <img
                src={props.imageLink}
                alt={props.title}
                className="example-img" />

            <div className="pastProjects">
                <a href={props.deployed} target="_blank" rel="noreferrer">Deployed Link</a>
                <a href={props.githubLink} target="_blank" rel="noreferrer">Github Link</a>
            </div>
        </div>
    );
}
export default Projects;