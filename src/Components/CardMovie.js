import React from 'react'
import { Link } from 'react-router-dom'
export const CardMovie = ({ele}) => {
  return (
    
        <div className='col-xs-6 col-sm-6 col-md-4 my-2 '>
            <Link to={`/movie/${ele.id}`}>
                <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500`+ele.poster_path} className='h-100' alt="hun"/>
                    <div className='card_overlay'>
                        <div className='overlay_text text-center w-100 p-2'>
                            <p>اسم الفيلم : {ele.title}</p>
                            <p>تاريخ الاصدار :{ele.release_date}</p>
                            <p>عدد المقيمين : {ele.vote_count}</p>
                            <p>التقيم : {ele.vote_average}</p>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    
  )
}
