import React from 'react';

function Resume() {


    return (
        <section className="resume">
            <div className="resume-cover">
                <button onClick='https://docs.google.com/document/d/1oH0Mv3Jb986FHPtRhptqqZknZMApW4Ec/edit?usp=sharing&ouid=102130653569823243919&rtpof=true&sd=true' className="button">View Resume</button>
            </div>


            <div className="skills">
                <ul className="skill-set">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>Node</li>
                    <li>JQuery</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>React</li>

                </ul>
            </div>
        </section>

    )
}

export default Resume;