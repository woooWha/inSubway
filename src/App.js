import React, { useState } from 'react';
import './App.css';
import Home from './route/Home';

function App() {

  const[videos,setvideos] = useState([
    {
    id: 1,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 2,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 3,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 4,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 5,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 6,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 7,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 8,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  {
    id: 9,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움'
  },
  ])


  return (
    <div className="App">
      <Home videos={videos}/>
    </div>
  );
}

export default App;
