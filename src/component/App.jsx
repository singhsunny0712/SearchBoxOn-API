import React, { useState,useEffect } from "react";
import DropDownList from "./Dropdownlist.jsx";
const URL=process.env.URL || 'http://www.songsterr.com/a/ra/songs.json?pattern=';
// import fetch from 'node-fetch';

function App() {

    const [inputText, setInputText] = useState("");
    const [searchWord, setsearchWord] = useState([]);

    function search() {
        console.log("inside search.......")
    }

    async function handle(event) {
        const newval = event.target.value;
        setInputText(newval);
        // console.log(newval)
        if (newval.slice(-1) === " ") {
            // console.log("call api..................with " + newval)
            const reqstr = URL + newval;
            // const request = new Request(reqstr)

            await fetch(reqstr, {
                method: "get"
            }).then(res => res.json())
                .then(result => {
                    setsearchWord(result)
                    
                    // console.log(typeof result)
                    
                    
                }).catch((err) => {
                    console.log(err);
                });
                
            }else{
                setsearchWord([])
            }
    }


    useEffect(() => {
    //    console.log("1111111111111111......................")
    //    console.log(searchWord)
    },[searchWord]);

    return (
        <div className="container">
            <div className="heading">
                <h1>Search Song</h1>
            </div>
            <div className="form">
                <input onChange={handle} type="text" value={inputText} />
                <button className="SearchButton" onClick={search}><span>Search</span></button>
            </div>
            <div>
              {searchWord.length > 0 ?<DropDownList searchWord={searchWord} inputText={inputText}/>:null}
            </div>
        </div>
        
    )
}

export default App;