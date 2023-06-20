import React,{Component, useContext, useEffect, useRef, useState} from "react";
import { Navbar } from "./Components/Navbar";
import { CardList } from "./Components/CardList";
import axios from "axios";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";
function App(){
  const [dataApi,setDataApi]=useState('');
  const [pageCount,setPageCount]=useState(0);
  const getALlMovies=async()=>{
    const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar')
    setDataApi(res.data.results)
    setPageCount(res.data.total_pages)
    
  }
  const getPage=async(pageNum)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${pageNum}`)
    setDataApi(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(()=>{
    getALlMovies();
  },[])
  const searchByQuery=async(word)=>{
    if(word == ""){
      getALlMovies();
    }else{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`);
      setDataApi(res.data.results);
      setPageCount(res.data.total_pages)
    }
      
  }
        return(
          <>
          <Navbar searchByQuery={searchByQuery}/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<CardList dataAPi={dataApi} getPage={getPage} pageCount={pageCount} />}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
              </Routes>
            </BrowserRouter>
          </>
        )
}
export default App;