import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom';
import axios from 'axios';
import logo from "../images/logo.png"

export const MovieDetails = () => {
    const param=useParams();
    const [detail,setDetails]=useState([])
    
    const getMovieDetails=async () =>{
        console.log("yes")
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
        setDetails(res.data)
        console.log(res)
        console.log(res.data.backdrop_path)
        
    }
    useEffect(()=>{
        getMovieDetails();
    },[])
return (
    <div className='container'>
        <div className='row my-2 detailsStyle'>
            <div className='col-sm-12 col-md-4 py-4'>
                <img src={`https://image.tmdb.org/t/p/w500`+detail.poster_path} className='w-100 details-image'/>
            </div>
            <div className='col-sm-12 col-md-8'>
                <div className='text-center py-5'>
                    <h4>اسم الفيلم : {detail.title} </h4>
                    <h4>تاريخ الفيلم : {detail.release_date}</h4>
                    <h4>عدد المقيمين : {detail.vote_count}</h4>
                    <h4>التقييم : {detail.vote_average}</h4>

                </div>
            </div>
        </div>
        <div className=' my-2 detailsStyle storyStyle'>
            <h2>القصه : </h2>
            <p className='py-2'>{detail.overview}</p>
        </div>
        <div className='d-flex justify-content-center my-3'>
            <Link to="/">
                <button className='btb btn-success mx-2'>عوده الرئيسيه</button>
            </Link>
            <a href={detail.homepage}>
                <button className='btb btn-success mx-2'>مشاهده الفيلم</button>
            </a>
            
        </div>
    </div>
  )
}
