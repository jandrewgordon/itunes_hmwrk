import React from "react";
import Entry from "./Entry";


const ChartList = ({entries}) => {

    const AllEntries = entries.map((entry)=>{
        return <Entry entry={entry}></Entry>
    })       

}

export default ChartList;