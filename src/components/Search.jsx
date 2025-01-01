import React, { useState, useEffect } from 'react';

const Search = () => {
    // State for storing fetched data
    const [userData, setUserData] = useState([]);
    // State for handling search input
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch data from API when the component mounts
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setUserData(data.meals);  // Store API data in state
                }
            })
            .catch(error => console.error("Error fetching data:", error)); 
    }, []);  // Empty dependency array means this runs only once

    // Inline styles for input
    const style = {
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        width: '300px'
    };

    // Button click handler (logs the current search term)
    function handleClick() {
        console.log("Search button clicked");
        console.log("Search term:", searchTerm);
    }

    // Filter the meals based on search input
    const filteredData = userData.filter(item =>
        item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-5">
            <input
                style={style}
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            <button
                className='border border-black px-5 py-1 ml-3'
                onClick={handleClick}
            >
                Search
            </button>

            <h1 className="text-2xl font-bold mt-5">Foods</h1>
            <ul>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <li key={item.idMeal} className="py-2">
                            {item.strMeal}
                        </li>
                    ))
                ) : (
                    <li className="py-2">No meals found.</li>
                )}
            </ul>
        </div>
    );
};

export default Search;
