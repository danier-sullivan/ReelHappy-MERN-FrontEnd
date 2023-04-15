
const ViewMovie=({movies})=>{
    const params=useParams();
    const title=params.title
    const url=`http://localhost:4000/movies/${title}`
    const [movie, setMovie]=useState(movies.find((foundMovie) => foundMovie.title === title))
    const refreshMovie=async()=>{
        const response= await fetch(url)
        const data=await response.json();
        setMovie(data);
    }
    useEffect(()=>{
        refreshMovie()
    },[])

    const loaded=()=>{
        console.log(movie)
        return(
            <>
                <MovieDisplay movie={movie} refreshMovie={refreshMovie} url={url}/>
                <CommentDisplay movie={movie} refreshMovie={refreshMovie} url={url}/>
            </>
            )}
    const loading=()=>{
        return <h1>Loading...</h1>
    }
    return (movies ? loaded(): loading())
}

export default ViewMovie;

