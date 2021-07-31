import React, { useState, useEffect } from "react";
import ChartList from "../Components/ChartList";

const ChartContainer = () => {

    const [entries, setEntries] = useState([])

    useEffect(() => {
        getEntries();
    }, [])

    const getEntries = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res=>res.json())
        .then(data=>setEntries(data.feed.entry))
    }


    //Check if API is loaded
    if(entries != null){
        return(
            <>
            <h1>{entries[0]["im:name"]}</h1>
            {/* <ChartList entries={entries}></ChartList> */}
            </>
        )
    }
    else {
        return <h1>Loading</h1>
    }
    




}

export default ChartContainer;