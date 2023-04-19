import TopTen from '../components/TopTen'
import React from 'react'
import {useEffect} from 'react'
// import { PromiseProvider } from 'mongoose'


const Home = ({data, fetchMovies, url}) => {
    useEffect(()=>{
        fetchMovies();
    }, [])

    return (
        <div>
            < TopTen data={data}/>
        </div>
)}

export default Home;