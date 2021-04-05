import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";



function Search() {

    const [value, setValue] = useState("");
    const [results,setResults] = useState([]);

    function handleChange(event) {
        const val = event.target.value;
        setValue(val);
    }

    useEffect(() => {

        let timerId = null;

        if (value) {
            timerId = setTimeout(async () => {
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });
                setResults(data.query.search);
            }, 1000);
        }
        return () => {
            clearTimeout(timerId);
        }
    }, [value]);



    return (
        <div>
        <form>
            <input type="text" placeholder="Search Wiki." value={value} onChange={handleChange} />
            <br />
            <button> Search Here.</button>
        </form>

        <List results = {results} />

        </div>
    )

}

export default Search;