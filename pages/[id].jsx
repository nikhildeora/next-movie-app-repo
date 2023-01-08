import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react'

const Movie = ({movie}) => {
// const router = useRouter()
// const {id} = router.query

//   return (
//     <div>Movie : {id}</div>
//   )

const addToWishlist = async () => {
      let obj = {
        title : movie.Title,
        runtime : movie.Runtime,
        release : movie.Released,
        language : movie.Language
      }

      await fetch(`http://localhost:8080/watchlist`,{
        method : "POST",
        body : JSON.stringify(obj),
        headers : {
            'Content-Type': 'application/json'
        }
      })
      
}

  return (
    <div style={{textAlign:"center",marginTop:"40px"}}>
        <h1>Movie Detaild</h1>
        <Image src={movie.Images[0]} alt={movie.Title} width={250} height={250} />
        <h2>Title : {movie.Title}</h2>
        <h2>Summary : {movie.Plot}</h2>
        <h2>Actors : {movie.Actors}</h2>
        <h2>Awards : {movie.Awards}</h2>
        <button onClick={addToWishlist} style={{padding:"12px",marginTop:"18px",fontSize:"23px"}}>Add To Watchlist</button>
    </div>
  )
}

export async function getStaticPaths(){
    let res = await fetch(`https://movies-database-gold.vercel.app/movies/`)
    let data = await res.json()
    return {
        // paths : [{params : {id : "1"}}],
        paths : data.map((item)=>({params : {id : String(item.id)}})),
        fallback : false,
    }
}

export async function getStaticProps(context){
    let id = context.params.id;
    let res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`)
    let data = await res.json()
    return {
      props : {
        movie : data
      }
    }
  }

export default Movie;