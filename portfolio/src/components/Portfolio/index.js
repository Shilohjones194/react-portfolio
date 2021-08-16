// https://reactjs.org/docs/components-and-props.html
import React, { useState } from 'react';
import Projects from '../Projects';



function Portfolio() {
    //list hook
    const [projectExamples] = useState([

        // list all your best work on the top 5.
        {
            id: 1,
            title: "Trivia With A T",
            image: ``,
            githubLink: "",
            description: "",
            deployed: ""
        },
        {
            id: 2,
            title: "",
            image: ``,
            githubLink: "",
            description: "",
            deployed: ""
        },
        {
            id: 3,
            title: "",
            image: ``,
            githubLink: "",
            description: "",
            deployed: ""
        },
        {
            id: 4,
            title: "",
            image: ``,
            githubLink: "",
            description: "",
            deployed: ""
        },
        {
            id: 5,
            title: "",
            image: ``,
            githubLink: "",
            description: "",
            deployed: ""
        }
    ]);

    return (
        <div>
            <div className="abc">
                <h1 className="title"> Portfolio</h1>
            </div>
            <div className="flex-row container">
                {projectExamples.map((project, i) => (
                    <Projects
                        key={i}
                        imageLink={project.image}
                        title={project.title}
                        id={project.id}
                        deployed={project.deployed}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;