import React, { useEffect } from "react";

//7e0614df

const API_URL = "http://www.omdbapi.com?apikey=7e0614df"

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log (data)
    }

    useEffect(() => {
        searchMovies("spiderman")
    }, [])



    return (
        <h1>App</h1>
    );
}

export default App;