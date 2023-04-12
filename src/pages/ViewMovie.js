import React from "react"


const ViewMovie=({movie})=>{

    return(
    <>
     <MovieDisplay movie={movie}/>
     <CommentDisplay movie={movie}/>
    </>
)}

export default ViewMovie;