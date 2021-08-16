// https://reactjs.org/docs/components-and-props.html
import React, { useState } from 'react';
import Projects from '../Projects';



function Portfolio() {
    //list hook
    const [projectExamples] = useState([

        // list all your best work on the top 5.
        {
            id: 1,
            title: "Trivia With A Twist",
            image: `${process.env.PUBLIC_URL}/images/TWAT.PNG`,
            githubLink: "https://github.com/Shilohjones194/TriviaWithATwist",
            description: "A little something to do during a Pandemic",
            deployed: "https://shilohjones194.github.io/TriviaWithATwist/"
        },
        {
            id: 2,
            title: "Weather-Dashboard.ServerSideAPI",
            image: `${process.env.PUBLIC_URL}/images/WeatherDashB.PNG`,
            githubLink: "https://github.com/Shilohjones194/Weather-Dashboard.ServerSideAPI",
            description: "Using multiple APIs and Moment, you can search each cities weather.",
            deployed: "https://shilohjones194.github.io/Weather-Dashboard.ServerSideAPI/"
        },
        {
            id: 3,
            title: "Note Taker",
            image: `${process.env.PUBLIC_URL}/images/WeatherDashB.PNG`,
            githubLink: "https://github.com/Shilohjones194/Note-Taker",
            description: "Simple note taking app using Express, Node & Heroku.",
            deployed: "https://radiant-harbor-07671.herokuapp.com/"
        },
        // other projects coming
        // {
        //     id: 4,
        //     title: "",
        //     image: ``,
        //     githubLink: "",
        //     description: "",
        //     deployed: ""
        // },
        // {
        //     id: 5,
        //     title: "",
        //     image: ``,
        //     githubLink: "",
        //     description: "",
        //     deployed: ""
        // }
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