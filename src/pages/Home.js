import React from "react"
import TopTen from "../components/TopTen"
import {useState, useEffect} from "react"

const Home=({movies})=>{

    return(
        <TopTen movies={movies}/>
    )}

export default Home;