import React, { useState } from 'react';

import './App.css';

//import all your components
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Footer from './components/Footer';

function App() {
    // all your different pages//
    const pages = [
        { name: "About" },
        { name: "Contact" },
        { name: "Portfolio" },
        { name: "Resume" }
    ]
    const [currentPage, setCurrentPage] = useState(pages[0]);

    const renderSwitch = (page) => {
        switch (page.name) {
            case "About":
                return <About />;
            case "Contact":
                return <Contact />;
            case "Portfolio":
                return <Portfolio />;
            case "Resume":
                return <Resume />;
                // default back to home page
            default:
                return <About />;
        }
    }
    return (
        <div>
            <NavBar
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
            <main>
                {renderSwitch(currentPage)}
            </main>
            {/* <Footer/> */}
        </div>
    );
}