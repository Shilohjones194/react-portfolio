import React from 'react';

function NavBar(props) {
    // needs hook
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props

    // Return needs to loop through all 4 pages and stick to eachpage.
    return (
        <header className="">
            <nav>
                <div className="flex-row navBar">
                    {pages.map((page) => (
                        <li
                            className={`mx-1 ${
                                currentPage.name === page.name && `navActive`
                                }`}
                            key={page.name}
                        >
                            <span
                            onClick={() => {
                                console.log(page);

                                setCurrentPage(page);
                            }}
                            >
                        </span>
                        </li>
                    ))}
                </div>
            </nav>
        </header >

    );
}

export default NavBar;