import React, {useState} from 'react';

import About from './components/About'; 
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
    const pages = [
        {name: "About"},
        {name: "Contact"},
        {name: "Portfolio"},
        {name: "Resume"}
    ]
    const [currentPage, setCurrentPage] = useState(pages[0]);
    
    const Switch = (page) => {}
}