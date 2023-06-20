import React from 'react'
import { CardMovie } from './CardMovie'
import { Pagnation } from './Pagnation'
export const CardList = ({dataAPi,getPage,pageCount}) => {
  return (
    <div className='container'>
       <div className='row'>
        {dataAPi.length >=1 ? (dataAPi.map((ele,index)=>{
          return(
            <CardMovie key={index} ele={ele}/>
          )
        })) : <div className='text-center my-3 fw-bold' style={{fontSize:30}}>لا يوجد افلام  ... </div>
        }
        {dataAPi.length>=1 ? ( <Pagnation getPage={getPage} pageCount={pageCount}/>) : null}
       
       </div>
        
        
        

    </div>
  )
}
